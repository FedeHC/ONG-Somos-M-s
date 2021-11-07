import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories, createCategory, deleteCategory, updateCategory} from '../../services/apiCategories';

export const getCategorias = createAsyncThunk(
  'categorias/getCategorias',
  async () => {
    return await getCategories();
  },
);

export const putCategorias = createAsyncThunk(
  'categorias/putCategorias',
  async (datos) => {
    const resp = await updateCategory(datos.id, datos.values);
    console.log(resp);
    return resp;
  },
);

export const postCategorias = createAsyncThunk(
  'categorias/postCategorias',
  async values => {
    const resp = await createCategory(values);
    return resp;
  },
);

export const deleteCategorias = createAsyncThunk(
  'categorias/deleteCategorias',
  async id => {
    const resp = await deleteCategory(id);
    return resp;
  },
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: {
    categoriasList: [],
    categoriasActive: {},
    loading: false,
    error: null,
  },
  reducers: {
    setCategoria(state, action) {
      state.categoriasActive = action.payload;
    },
    deleteCategories(state, action) {
      state.categoriasList = state.categoriasList.filter(
        categorias => categorias.id !== action.payload
      );
    }
  },
  extraReducers: {
    //get
    [getCategorias.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategorias.fulfilled]: (state, action) => {
      state.categoriasList = action.payload.data.data;
      state.loading = false;
    },
    [getCategorias.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //post
    [postCategorias.pending]: (state, action) => {
      state.loading = true;
    },
    [postCategorias.fulfilled]: (state, action) => {
      state.categoriasList = [action.payload.data.data, ...state.categoriasList];
      state.loading = false;
    },
    [postCategorias.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //put
    [putCategorias.pending]: (state, action) => {
      state.loading = true;
    },
    [putCategorias.fulfilled]: (state, action) => {
      state.categoriasList = state.categoriasList.map(categorias =>
        categorias.id === action.payload.data.data.id
          ? action.payload.data.data
          : categorias,
      );
      state.loading = false;
    },
    [putCategorias.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setCategoria, deleteCategories } = categoriasSlice.actions;
export default categoriasSlice.reducer;
