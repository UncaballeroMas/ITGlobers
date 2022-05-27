import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import {registerAccess} from '../../store/types/login';
import {fetchRegister} from '../../store/types/register';
import {responsiveNumbers} from '../../utils/dimensions';
import theme from '../../utils/theme';

import {styles} from './style';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const register = async () => {
    dispatch(
      fetchRegister({
        email: email,
        password: 'password',
        callback: () => {
          navigation.navigate('Pagination');
        },
      }),
    );
    dispatch(
      registerAccess({
        email: email,
      }),
    );
  };
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.PrimaryLogin}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <Text style={styles.label}>Register</Text>
        <FormInput
          label={'Email:'}
          onChange={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          label={'Password:'}
          onChange={setPassword}
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <Button
          onPress={register}
          text={'Register'}
          paddingHorizontal={responsiveNumbers.eightyScale}
        />
      </View>
    </View>
  );
};

export default Register;
