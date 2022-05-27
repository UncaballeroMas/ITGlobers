import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiReqres from '../apiReqres';
import {encryptData, storeData} from '../../utils/storage';
import {AES256} from '../../config/constants.config';

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
    throw 'Error fetching Resources';
  }
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
      .addCase(fetchLogin.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const {reset} = LoginSlice.actions;
export default LoginSlice.reducer;
