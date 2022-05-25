import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';

const Paginacion = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Paginacion</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textbutton}>Cerrar Seccion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Paginacion;
