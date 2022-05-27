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
import {RootState} from '../../store/store';
import {fetchLogin} from '../../store/types/login';

import {styles} from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const screenState = useSelector((state: RootState) => state.login);

  const signIn = async () => {
    dispatch(
      fetchLogin({
        email: email,
        password: password,
        callback: () => {
          navigation.navigate('Paginacion');
        },
      }),
    );
  };

  useEffect(() => {
    if (screenState.login.email) {
      navigation.navigate('Paginacion');
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

      <TextInput
        value={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textimput}
      />

      <TextInput
        value={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textimput}
      />

      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.textbutton}>Sing in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
