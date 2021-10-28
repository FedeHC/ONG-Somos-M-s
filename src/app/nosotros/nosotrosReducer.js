import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getHome, postHome } from '../../services/apiHome';

export const getNosotros = createAsyncThunk(
  'nosotros/getNosotros',
  async () => {
    return await getHome();
  },
);
export const postNosotros = createAsyncThunk(
  'nosotros/postNosotros',
  async body => {
    return await postHome(body);
  },
);

const nosotrosSlice = createSlice({
  name: 'nosotros',
  initialState: {
    nosotros: {},
    loading: null,
    error: null,
  },
  extraReducers: {
    //get
    [getNosotros.pending]: (state, action) => {
      state.loading = true;
    },
    [getNosotros.fulfilled]: (state, action) => {
      state.nosotros = action.payload.data.data;
      state.loading = false;
    },
    [getNosotros.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //post
    [postNosotros.pending]: (state, action) => {
      state.loading = true;
    },
    [postNosotros.fulfilled]: (state, action) => {
      state.nosotros = state.nosotros.data.data;
    },
    [postNosotros.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default nosotrosSlice.reducer;
