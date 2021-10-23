import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showActivities } from '../../services/apiActivities';

export const getActividades = createAsyncThunk(
  "actividades/getActividades",
  async()=>{
    return await showActivities();
});




const actividadesSlice = createSlice({
 name:"actividades",
 initialState:{
  actividadesList:[],
  loading:false,
  error:null
 },
 extraReducers:{
   //get
   [getActividades.pending]:(state, action)=>{
     state.loading = true;
   },
   [getActividades.fulfilled]:(state, action)=>{
     state.actividadesList = action.payload.data.data;
     state.loading = false;
   },
   [getActividades.rejected]:(state, action)=>{
     state.error = action.payload; 
     state.loading = false;
   },
 }
});

export default actividadesSlice.reducer;