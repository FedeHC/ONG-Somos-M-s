import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createNews,
  getNews,
  updateNews,
  deleteNews,
} from '../../services/apiNews';

export const getNovedades = createAsyncThunk(
  'novedades/getNovedades',
  async () => {
    return await getNews();
  },
);

export const putNovedades = createAsyncThunk(
  'novedades/putNovedades',
  async datos => {
    const { values, id } = datos;
    const resp = await updateNews(values, id);
    return resp;
  },
);

export const postNovedades = createAsyncThunk(
  'novedades/postNovedades',
  async values => {
    const resp = await createNews(values);
    return resp;
  },
);

export const deleteNovedades = createAsyncThunk(
  'novedades/deleteNovedades',
  async id => {
    const resp = await deleteNews(id);
    return resp;
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
    setNovedadesDelete(state, action) {
      state.novedadesList = state.novedadesList.filter(
        novedad => novedad.id !== action.payload,
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
    //put
    [putNovedades.pending]: (state, action) => {
      state.loading = true;
    },
    [putNovedades.fulfilled]: (state, action) => {
      state.novedadesList = state.novedadesList.map(novedad =>
        novedad.id === action.payload.data.data.id
          ? action.payload.data.data
          : novedad,
      );
      state.loading = false;
    },
    [putNovedades.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //post
    [postNovedades.pending]: (state, action) => {
      state.loading = true;
    },
    [postNovedades.fulfilled]: (state, action) => {
      state.novedadesList = [action.payload.data.data, ...state.novedadesList];
      state.loading = false;
    },
    [postNovedades.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setNovedad, setNovedadDetail, setNovedadesDelete } =
  novedadeSlice.actions;
export default novedadeSlice.reducer;
