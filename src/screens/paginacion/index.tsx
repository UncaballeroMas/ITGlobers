import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchResources, Resource} from '../../store/types/resources';
import {RootState} from '../../store/store';
import {styles} from './style';
import {reset} from '../../store/types/login';
import {AES256} from '../../config/constants.config';
import {decryptData} from '../../utils/storage';

const Paginacion = ({navigation}) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text>{email} </Text>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.textbutton}>Cerrar Sesion</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.nameText}>Lista de recursos</Text>
      <FlatList
        style={styles.flatlistStyle}
        data={screenState.resources}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={({item}) => <UserListItem resource={item} />}
        onEndReached={handleOnEndReached}
      />
    </SafeAreaView>
  );
};
const UserListItem: FunctionComponent<{resource: Resource}> = ({resource}) => {
  return (
    <View style={styles.containerList(resource.color)}>
      <Text style={styles.nameText}>{resource.name}</Text>
      <Text style={styles.nameText}>{resource.year}</Text>
      <Text style={styles.nameText}>{resource.pantone_value}</Text>
    </View>
  );
};

export default Paginacion;
