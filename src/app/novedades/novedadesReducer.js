import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNews } from '../../services/apiNews';

export const getNovedades = createAsyncThunk(
  'novedades/getNovedades',
  async () => {
    return await getNews();
  },
);

const novedadeSlice = createSlice({
  name: 'novedades',
  initialState: {
    novedadesList: [],
    novedadDetail: {},
    novedadACtive: {},
    loading: false,
    error: null,
  },
  reducers: {
    setNovedad(state, action) {
      state.novedadACtive = action.payload;
    },
    setNovedadDetail(state, action) {
      state.novedadDetail = action.payload;
    },
    createNovedad(state, action) {
      state.novedadesList = state.novedadesList.push(action.payload);
    },

    deleteNovedad(state, action) {
      state.novedadesList = state.novedadesList.filter(
        actividad => actividad.id !== action.payload,
      );
    },

    editNovedad(state, action) {
      state.novedadesList = state.novedadesList.filter(
        actividad => actividad.id === action.payload,
      );
    },
  },
  extraReducers: {
    //get
    [getNovedades.pending]: (state, action) => {
      state.loading = true;
    },
    [getNovedades.fulfilled]: (state, action) => {
      state.novedadesList = action.payload.data.data;
      state.loading = false;
    },
    [getNovedades.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setNovedad,
  setNovedadDetail,
  createNovedad,
  deleteNovedad,
  editNovedad,
} = novedadeSlice.actions;
export default novedadeSlice.reducer;
