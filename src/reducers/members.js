import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMembers } from '../services/apiMembers';

export const getList = createAsyncThunk(
  'members/getList',

  async (dispatch, getState) => {
    const { data } = await getMembers();
    return data;
  },
);

const members = createSlice({
  name: 'members',

  initialState: {
    members: [],
    status: null,
  },

  extraReducers: {
    [getList.pending]: (state, action) => {
      state.status = 'loading';
    },

    [getList.fulfilled]: (state, action) => {
      state.status = 'success';

      state.members = action.payload.data;
    },

    [getList.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default members.reducer;
