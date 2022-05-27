import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiReqres from '../apiReqres';

export type Resource = {
  id: string;
  color: string;
  name: string;
  pantone_value: string;
  year: string;
};

export type ResourceListState = {
  resources: Resource[];
  loading: boolean;
  error: boolean;
  nextPage: number;
};

const initialState: ResourceListState = {
  resources: [],
  loading: false,
  error: false,
  nextPage: 1,
};

export const fetchResources = createAsyncThunk<
  {resources: Resource[]},
  {page: number}
>('fetchResources', async ({page}) => {
  const response = await apiReqres.fetchResource(page);
  if (response.kind === 'success') {
    return {
      resources: response.body ?? [],
    };
  } else {
    throw 'Error fetching Resources';
  }
});

const ResourceListSlice = createSlice({
  name: 'resourceList',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchResources.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.resources = state.resources.concat(action.payload.resources);
        state.loading = false;
        state.nextPage += 1;
      })
      .addCase(fetchResources.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});
export default ResourceListSlice.reducer;
