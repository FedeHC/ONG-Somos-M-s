import { createSlice } from '@reduxjs/toolkit';


const categoriasSlice = createSlice({
 name:"categorias",
 initialState:{
  categoriasList:[],
  categoriasActive:{},
  loading:false,
  error:null
 },
 reducers:{},
 extraReducers:{

 }
});


export default categoriasSlice.reducer;