import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { loginUser } from '../../services/apiAuth';


export const startLogin = createAsyncThunk(
	"auth/startLogin",
	async (body) => {
		  return await loginUser("auth/login", body);
	});

const authSlice = createSlice({
  name:"auth",
  initialState:{
    logged:false,
    user:{},
    token:null,
    loading:false,
    error:null,
    checking:true,
  },
  reducers:{
    setLogout(state, action){
        state.logged = false;
        state.loading = false;
        state.checking = false;
    }
  },
  extraReducers:{
    [startLogin.pending]:(state, action)=>{
       state.loading = true;
    },
    [startLogin.fulfilled]:(state, action)=>{
       state.loading = false;
       if(!action.payload.error){
         state.user = action.payload.data.data.usuario;
         state.token = action.payload.data.data.token;
        }else{
          state.error = action.payload.error;
        }
        state.checking = false;
        state.logged = true;
    },
    [startLogin.rejected]:(state, action)=>{
       state.loading = false;
       state.error = action.payload;
       state.checking = false;
       state.logged = false;
    },
  }
});


export const { setLogout } = authSlice.actions;
export default authSlice.reducer;