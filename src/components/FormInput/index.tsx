import React, {useState} from 'react';

import {Text, TextInput, View} from 'react-native';
import {styles} from './style';
const FormInput = ({label, onChange, value, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={userEmail => onChange(userEmail)}
        style={styles.textimput}
        {...props}
      />
    </View>
  );
};

export default FormInput;
