import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showActivities, updateActivity, createActivity, deleteActivity } from '../../services/apiActivities';

export const getActividades = createAsyncThunk(
  'actividades/getActividades',
  async () => {
    return await showActivities();
  },
);

export const putActividades = createAsyncThunk(
  'novedades/putActividades',
  async datos => {
    const { values, id } = datos;
    const resp = await updateActivity(values, id);
    return resp;
  },
);

export const postActividades = createAsyncThunk(
  'novedades/postActividades',
  async values => {
    const resp = await createActivity(values);
    return resp;
  },
);

export const deleteActividades = createAsyncThunk(
  'novedades/deleteActividades',
  async id => {
    const resp = await deleteActivity(id);
    return resp;
  },
);


const actividadesSlice = createSlice({
  name: 'actividades',
  initialState: {
    actividadesList: [],
    actividadDetail: {},
    actividadActive: {},
    loading: false,
    error: null,
  },
  reducers: {
    setActividades(state, action) {
      state.actividadActive = action.payload;
    },
    setActividadDetail(state, action) {
      state.actividadDetail = action.payload;
    },
    deleteActividad(state, action) {
      state.actividadesList = state.actividadesList.filter(
        actividad => actividad.id !== action.payload
      );
    }
  },
  extraReducers: {
    //get
    [getActividades.pending]: (state, action) => {
      state.loading = true;
    },
    [getActividades.fulfilled]: (state, action) => {
      state.actividadesList = action.payload.data.data;
      state.loading = false;
    },
    [getActividades.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //post
    [postActividades.pending]: (state, action) => {
      state.loading = true;
    },
    [postActividades.fulfilled]: (state, action) => {
      state.actividadesList = [action.payload.data.data, ...state.actividadesList];
      state.loading = false;
    },
    [postActividades.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //put
    [putActividades.pending]: (state, action) => {
      state.loading = true;
    },
    [putActividades.fulfilled]: (state, action) => {
      state.actividadesList = state.actividadesList.map(actividad =>
        actividad.id === action.payload.data.data.id
          ? action.payload.data.data
          : actividad,
      );
      state.loading = false;
    },
    [putActividades.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setActividades,
  setActividadDetail,
  deleteActividad,
} = actividadesSlice.actions;
export default actividadesSlice.reducer;
