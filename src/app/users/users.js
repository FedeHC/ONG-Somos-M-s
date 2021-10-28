import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../../services/apiUsers';

export const getUserThunk = createAsyncThunk(
  'users/getUserThunk',

  async () => {
    return  await getUsers();
  },
);

const users = createSlice({
  name: 'users',

  initialState: {
    usersList: [],
    userActive:{},
    loading:false,
    error:null
  },
  reducers:{
    setUser(state, action){
        state.userActive = action.payload;
    }
  },
  extraReducers: {
    [getUserThunk.pending]: (state, action) => {
      state.loading = true;
    },

    [getUserThunk.fulfilled]: (state, action) => {
      state.usersList = action.payload.data.data;
      state.loading = false;
    },

    [getUserThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser } = users.actions;
export default users.reducer;
