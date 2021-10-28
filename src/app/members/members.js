import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMembers } from '../../services/apiMembers';

export const getMemberThunk = createAsyncThunk(
  'members/getMemberThunk',

  async () => {
    return await getMembers();
  },
);

const members = createSlice({
  name:'members',

  initialState: {
    membersList: [],
    memberActive:{},
    loading:false,
    error:null
  },
  reducers:{
    setMember(state, action){
      state.memberActive = action.payload;
    }
  },
  extraReducers: {
    [getMemberThunk.pending]: (state, action) => {
      state.loading = true;
    },

    [getMemberThunk.fulfilled]: (state, action) => {
      state.membersList = action.payload.data.data;
      state.loading = false;
    },

    [getMemberThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;;
    },
  },
});

export const { setMember } = members.actions;
export default members.reducer;
