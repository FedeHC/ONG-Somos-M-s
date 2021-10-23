import { createSlice } from '@reduxjs/toolkit';


const novedadeSlice = createSlice({
  name:"novedades",
  initialState:{
   novedadesList:[],
   loading:false,
   error:null
  },
  extraReducers:{
    
  }
});


export default novedadeSlice.reducer;