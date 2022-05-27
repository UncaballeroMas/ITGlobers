import React, {FunctionComponent, useEffect} from 'react';
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

const Paginacion = ({navigation}) => {
  const screenState = useSelector((state: RootState) => state.resourceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResources({page: 1}));
  }, []);
  const handleOnEndReached = () => {
    if (!screenState.loading) {
      dispatch(fetchResources({page: screenState.nextPage}));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text>email: </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textbutton}>Cerrar Seccion</Text>
        </TouchableOpacity>
        {/* {screenState.loading && <Text>Loading</Text>}
        {screenState.error && <Text>Error</Text>} */}
      </View>
      <Text style={styles.nameText}>Lista de recursos</Text>
      <FlatList
        style={styles.flatlistStyle}
        data={screenState.resources}
        keyExtractor={item => item.id}
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
