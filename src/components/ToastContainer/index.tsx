/** @format */
import React, {useMemo} from 'react';
import Toast from 'react-native-toast-message';

import ToastError from './ToastError';

const ToastContainer = ({children}) => {
  const style = useMemo(() => {
    return {
      autoHide: true,
      position: 'bottom',
      bottomOffset: 50,
      visibilityTime: 2000,
    };
  }, []);
  const toastConfig = {
    error: ({props}) => <ToastError {...props} />,
  };

  return (
    <>
      {children}
      <Toast config={toastConfig} {...style} />
    </>
  );
};

export default ToastContainer;
