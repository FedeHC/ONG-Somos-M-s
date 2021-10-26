import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMembers } from '../../services/apiMembers';

export const getMemberThunk = createAsyncThunk(
  'members/getMemberThunk',

  async (dispatch, getState) => {
    return await getMembers();
  },
);

const members = createSlice({
  name:'members',

  initialState: {
    members: [],
    status: null,
  },

  extraReducers: {
    [getMemberThunk.pending]: (state, action) => {
      state.status = 'loading';
    },

    [getMemberThunk.fulfilled]: (state, action) => {
      state.status = 'success';

      state.members = action.payload.data.data;
    },

    [getMemberThunk.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default members.reducer;
