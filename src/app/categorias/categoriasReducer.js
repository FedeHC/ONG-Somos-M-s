import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../../services/apiCategories';

export const getCategorias = createAsyncThunk(
	"categorias/getCategorias",
	async () => {
		return await getCategories();
	});


const categoriasSlice = createSlice({
 name:"categorias",
 initialState:{
  categoriasList:[],
  categoriasActive:{},
  loading:false,
  error:null
 },
 reducers:{
   setCategoria(state, action){
       state.categoriasActive = action.payload;
   }
 },
 extraReducers:{
   //get
   [getCategorias.pending]:(state, action) =>{
     state.loading = true;
   },
   [getCategorias.fulfilled]:(state, action) =>{
     state.categoriasList = action.payload.data.data;
     state.loading = false;
   },
   [getCategorias.rejected]:(state, action) =>{
     state.error = action.payload;
     state.loading = false;
   },
 } 
});

export const { setCategoria } = categoriasSlice.actions;
export default categoriasSlice.reducer;