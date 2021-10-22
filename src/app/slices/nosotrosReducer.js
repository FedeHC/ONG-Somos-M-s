import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getHome } from '../../services/apiHome';

export const getNosotros = createAsyncThunk(
	"nosotros/getNosotros",
	async () => {
		return await getHome();
	}
);


const nosotrosSlice = createSlice({
  name: 'nosotros',
  initialState: {
    nosotros: {},
    loading: null,
    error: null,
  },
  extraReducers:{
   //get
   [getNosotros.pending]:(state, action)=>{
    state.loading = true;
   },
   [getNosotros.fulfilled]:(state, action)=>{
    state.nosotros = action.payload.data.data;
    state.loading = false;
   },
   [getNosotros.rejected]:(state, action)=>{
    state.error = action.payload;
    state.loading = false;
   },

  },
});

export default nosotrosSlice.reducer;

