import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../services/apiUsers';

export const getList = createAsyncThunk(
  'users/getList',

  async (dispatch, getState) => {
    const { data } = await getUsers();
    return data;
  },
);

const users = createSlice({
  name: 'slides',

  initialState: {
    users: [],

    status: null,
  },

  extraReducers: {
    [getList.pending]: (state, action) => {
      state.status = 'loading';
    },

    [getList.fulfilled]: (state, action) => {
      state.status = 'success';

      state.users = action.payload.data;
    },

    [getList.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default users.reducer;
