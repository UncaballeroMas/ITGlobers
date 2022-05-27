import thunkMiddleware from 'redux-thunk';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userListSlice from './types/user';
import resourceListSlice from './types/resources';
import LoginSlice from './types/login';

const rootReducer = combineReducers({
  userList: userListSlice,
  resourceList: resourceListSlice,
  login: LoginSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export default store;
