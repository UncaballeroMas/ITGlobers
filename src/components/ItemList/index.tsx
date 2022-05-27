import React, {useState} from 'react';

import {Text, TextInput, View} from 'react-native';
import {styles} from './style';
const ItemList = ({resource}) => {
  return (
    <View style={styles.containerList(resource.color)}>
      <Text style={styles.nameText}>{resource.name}</Text>
      <Text style={styles.nameText}>{resource.year}</Text>
      <Text style={styles.nameText}>{resource.pantone_value}</Text>
    </View>
  );
};

export default ItemList;
