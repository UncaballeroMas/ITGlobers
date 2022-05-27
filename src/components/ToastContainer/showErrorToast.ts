import {Keyboard} from 'react-native';
import Toast from 'react-native-toast-message';

export const showErrorToastMessage = (message: any, visibilityTime = 2000) => {
  Keyboard.dismiss();
  setTimeout(
    () =>
      Toast.show({
        type: 'error',
        visibilityTime,
        props: {
          title: message,
        },
      }),
    300,
  );
};
