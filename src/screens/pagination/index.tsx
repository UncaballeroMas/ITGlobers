import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchResources, Resource} from '../../store/types/resources';
import {RootState} from '../../store/store';
import {styles} from './style';
import {reset} from '../../store/types/login';
import {AES256} from '../../config/constants.config';
import {decryptData} from '../../utils/storage';
import theme from '../../utils/theme';
import ItemList from '../../components/ItemList';
import Button from '../../components/Button';
import {responsiveNumbers} from '../../utils/dimensions';

const Pagination = ({navigation}) => {
  const user = useSelector((state: RootState) => state.login);
  const screenState = useSelector((state: RootState) => state.resourceList);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  useEffect(() => {
    dispatch(fetchResources({page: 1}));
  }, []);
  useEffect(() => {
    const email = decryptData(AES256, user.login.email);
    setEmail(email);
  }, [user]);

  const handleOnEndReached = () => {
    if (!screenState.loading) {
      dispatch(fetchResources({page: screenState.nextPage}));
    }
  };
  const logout = async () => {
    dispatch(reset());
    navigation.navigate('Login');
  };

  const renderItem = ({item}) => <ItemList resource={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.PrimaryLogin}
        barStyle={'dark-content'}
      />
      <View style={styles.containerHeader}>
        <Text style={styles.email}>{email} </Text>
        <Button
          onPress={logout}
          text={'Logout'}
          paddingHorizontal={responsiveNumbers.tenScale}
        />
      </View>
      <Text style={styles.label}>Lista de recursos</Text>
      <FlatList
        style={styles.flatlistStyle}
        data={screenState.resources}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={renderItem}
        onEndReached={handleOnEndReached}
      />
    </SafeAreaView>
  );
};

export default Pagination;
