import { createSlice } from '@reduxjs/toolkit';


const actividadesSlice = createSlice({
 name:"actividades",
 initialState:{
  actividadesList:[],
  loading:false,
  error:null
 },
 extraReducers:{

 }
});

export default actividadesSlice.reducer;