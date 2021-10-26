import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { slidesList } from '../../services/slidesServices';

export const getSliceThunk = createAsyncThunk(
  'slides/getSliceThunk',
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
    [getSliceThunk.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getSliceThunk.fulfilled]: (state, action) => {
      state.status = 'success';
      state.slides = action.payload.data;
    },
    [getSliceThunk.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default slides.reducer;
