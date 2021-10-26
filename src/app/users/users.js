import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../../services/apiUsers';

export const getUserThunk = createAsyncThunk(
  'users/getUserThunk',

  async (dispatch, getState) => {
    const { data } = await getUsers();
    return data;
  },
);

const users = createSlice({
  name: 'users',

  initialState: {
    users: [],

    status: null,
  },

  extraReducers: {
    [getUserThunk.pending]: (state, action) => {
      state.status = 'loading';
    },

    [getUserThunk.fulfilled]: (state, action) => {
      state.status = 'success';

      state.users = action.payload.data;
    },

    [getUserThunk.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default users.reducer;
