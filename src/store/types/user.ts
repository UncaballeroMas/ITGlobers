import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiReqres from '../apiReqres';

export type User = {
  name: {first: string};
  picture: {
    thumbnail: string;
  };
};

export type UserListState = {
  users: User[];
  loading: boolean;
  error: boolean;
  nextPage: number;
};

const initialState: UserListState = {
  users: [],
  loading: false,
  error: false,
  nextPage: 1,
};

export const fetchUsers = createAsyncThunk<{users: User[]}, {page: number}>(
  'fetchUsers',
  async ({page}) => {
    const response = await apiReqres.fetchUser(page, 10);
    if (response.kind === 'success') {
      return {
        users: response.body ?? [],
      };
    } else {
      throw 'Error fetching users';
    }
  },
);

const UserListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = state.users.concat(action.payload.users);
        state.loading = false;
        state.nextPage += 1;
      })
      .addCase(fetchUsers.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});
export default UserListSlice.reducer;
