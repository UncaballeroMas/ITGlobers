import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store, {persistor} from './src/store/store';
import Login from './src/screens/login';
import Paginate from './src/screens/paginate';
import Register from './src/screens/register';
import ToastContainer from './src/components/ToastContainer';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Paginate" component={Paginate} />
          </Stack.Navigator>
          <ToastContainer children={undefined} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
