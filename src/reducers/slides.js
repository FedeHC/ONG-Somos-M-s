import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { slidesList } from '../services/slidesServices';

export const getList = createAsyncThunk(
  'slides/getList',
  async (dispatch, getState) => {
    const { data } = await slidesList(process.env.REACT_APP_ENDPOINT_SLIDES);
    return data;
  },
);

const slides = createSlice({
  name: 'slides',
  initialState: {
    slides: [],
    status: null,
  },
  extraReducers: {
    [getList.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getList.fulfilled]: (state, action) => {
      state.status = 'success';
      state.slides = action.payload.data;
    },
    [getList.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default slides.reducer;
