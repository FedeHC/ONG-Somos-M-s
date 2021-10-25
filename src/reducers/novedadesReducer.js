import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNews } from '../services/apiNews';

export const getNovedades = createAsyncThunk(
	"novedades/getNovedades",
	async () => {
		return await getNews();
});

const novedadeSlice = createSlice({
  name:"novedades",
  initialState:{
   novedadesList:[],
   loading:false,
   error:null
  },
  extraReducers:{
    //get
    [getNovedades.pending]:(state, action)=>{
       state.loading = true;
    },
    [getNovedades.fulfilled]:(state, action)=>{
       state.novedadesList = action.payload.data.data;
       state.loading = false;
    },
    [getNovedades.rejected]:(state, action)=>{
       state.error = action.payload;
       state.loading = false;
    }
  }
});


export default novedadeSlice.reducer;