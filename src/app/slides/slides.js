import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { methodGetPublic } from '../../services/publicApiService';
import { slidesList } from '../../services/slidesServices';

export const getSliceThunk = createAsyncThunk(
  'slides/getSliceThunk',
  async () => {
    return await methodGetPublic('slides');
  },
);

const slides = createSlice({
  name: 'slides',
  initialState: {
    slidesList: [],
    slideActive: {},
    loading: false,
    error: null,
  },
  reducers: {
    setSlide(state, action) {
      state.slideActive = action.payload;
    },
    editSlides(state, action) {
      state.slidesList = state.slidesList.filter(
        slice => slice.id === action.payload,
      );
    },
  },
  extraReducers: {
    [getSliceThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getSliceThunk.fulfilled]: (state, action) => {
      state.slidesList = action.payload.data.data;
      state.loading = false;
    },
    [getSliceThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setSlide, editSlides } = slides.actions;
export default slides.reducer;
