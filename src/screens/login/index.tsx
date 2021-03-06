import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import {showErrorToastMessage} from '../../components/ToastContainer/showErrorToast';
import {RootState} from '../../store/store';
import {fetchLogin} from '../../store/types/login';
import {responsiveNumbers} from '../../utils/dimensions';
import {validateEmail} from '../../utils/validation';

import {styles} from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const screenState = useSelector((state: RootState) => state.login);

  const signIn = async () => {
    if (!validateEmail(email)) showErrorToastMessage('Invalid Email.');
    else if (password.length <= 0) showErrorToastMessage('Invalid Password.');
    else {
      dispatch(
        fetchLogin({
          email: email,
          password: password,
          callback: () => {
            navigation.navigate('Pagination');
          },
        }),
      );
    }
  };

  useEffect(() => {
    if (screenState.login.email) {
      navigation.navigate('Pagination');
    }
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      />

      <Image
        style={styles.logo}
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C4E0BAQE57T41T0ZR8A/company-logo_200_200/0/1587092424852?e=2147483647&v=beta&t=KeWpAEzM4ESlfH0As5SRjMrj04gWb18SRZFEJoCMN7Y',
        }}
      />
      <View style={styles.containerLogin}>
        <FormInput
          label={'UserName:'}
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
          onPress={signIn}
          text={'Sing in'}
          paddingHorizontal={responsiveNumbers.eightyScale}
        />

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
