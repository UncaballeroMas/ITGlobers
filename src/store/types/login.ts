import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiReqres from '../apiReqres';

export type LoginData = {
  token: string;
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
  },
};

export const fetchLogin = createAsyncThunk<
  {login: string},
  {email: string; password: string; callback: any}
>('fetchLogin', async ({email, password, callback}) => {
  const response = await apiReqres.fetchLogin(email, password);
  if (response.kind === 'success') {
    callback();
    return {
      login: response.body,
    };
  } else {
    throw 'Error fetching Resources';
  }
});

const LoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLogin.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.login.token = action.payload.login;
        state.loading = false;
      })
      .addCase(fetchLogin.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});
export default LoginSlice.reducer;
