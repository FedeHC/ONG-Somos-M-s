import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showActivities } from '../../services/apiActivities';

export const getActividades = createAsyncThunk(
  'actividades/getActividades',
  async () => {
    return await showActivities();
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
  },
});

export const { setActividades, setActividadDetail } = actividadesSlice.actions;
export default actividadesSlice.reducer;
