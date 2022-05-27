import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {showErrorToastMessage} from '../../components/ToastContainer/showErrorToast';
import * as apiReqres from '../apiReqres';
import {registerAccess} from './login';

export type RegisterData = {
  token: string;
};

export type RegisterState = {
  register: RegisterData;
  loading: boolean;
  error: boolean;
};

const initialState: RegisterState = {
  loading: false,
  error: false,
  register: {
    token: '',
  },
};

export const fetchRegister = createAsyncThunk<
  {register: string},
  {email: string; password: string; callback: any}
>('fetchRegister', async ({email, password, callback}) => {
  const response = await apiReqres.fetchRegister(email, password);
  if (response.kind === 'success') {
    callback();
    return {
      register: response.body,
    };
  } else {
    showErrorToastMessage('Error fetching Resources');
  }
});

const RegisterSlice = createSlice({
  name: 'register',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRegister.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.register.token = action.payload.register;
        state.loading = false;
      })
      .addCase(fetchRegister.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});
export default RegisterSlice.reducer;
