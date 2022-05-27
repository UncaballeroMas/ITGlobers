import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import * as apiReqres from '../apiReqres';
import {encryptData, storeData} from '../../utils/storage';
import {AES256} from '../../config/constants.config';
import {showErrorToastMessage} from '../../components/ToastContainer/showErrorToast';

export type LoginData = {
  token: string;
  email: string;
};

export type LoginState = {
  login: LoginData;
  loading: boolean;
  error: boolean;
};

const initialState: LoginState = {
  loading: false,
  error: false,
  login: {
    token: '',
    email: '',
  },
};

export const fetchLogin = createAsyncThunk<
  {login: string; email: string},
  {email: string; password: string; callback: any}
>('fetchLogin', async ({email, password, callback}) => {
  const response = await apiReqres.fetchLogin(email, password);
  if (response.kind === 'success') {
    callback();
    return {
      login: response.body,
      email: encryptData(AES256, email),
    };
  } else {
    showErrorToastMessage('Error fetching Resources');
  }
});
export const registerAccess = createAsyncThunk<
  {email: string},
  {email: string}
>('registerAccess', async ({email}) => {
  return {
    email: encryptData(AES256, email),
  };
});

const LoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLogin.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.login.token = action.payload.login;
        state.loading = false;
        state.login.email = action.payload.email;
      })
      .addCase(registerAccess.fulfilled, (state, action) => {
        state.login.token = action.payload.token;
        state.loading = false;
        state.login.email = action.payload.email;
      })
      .addCase(fetchLogin.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const {reset, loginRegister} = LoginSlice.actions;
export default LoginSlice.reducer;
