import React, {useState} from 'react';

import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
const Button = ({text, onPress, paddingHorizontal, ...props}) => {
  return (
    <TouchableOpacity
      style={styles.button(paddingHorizontal)}
      onPress={onPress}>
      <Text style={styles.textbutton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
