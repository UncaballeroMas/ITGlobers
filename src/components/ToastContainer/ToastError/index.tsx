import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const ToastError = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{title}</Text>
    </View>
  );
};

export default ToastError;
