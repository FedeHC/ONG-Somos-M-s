import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { loginUser, revalidationUser, registerUSer } from '../../services/apiAuth';


export const startLogin = createAsyncThunk(
	"auth/startLogin",
	async (body) => {
		  const resp = await loginUser("login", body);
      localStorage.setItem("token",resp.data.data.data.token);
      return resp;
    });

    
export const startRegister = createAsyncThunk(
	"auth/startRegister",
	async (body) => {
      console.log(body);
		  const resp = await registerUSer("register", body);
      localStorage.setItem("token",resp.data.data.data.token);
      return resp;
    });
    
    
    
export const startRenew = createAsyncThunk(
  "auth/startRenew",
  async ()=>{
    const resp = await revalidationUser("auth/me");
    return resp;
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
        state.user = {};
        state.token = null;
        state.error = null;
        localStorage.removeItem("token");
    }
  },
  extraReducers:{
    [startLogin.pending]:(state, action)=>{
       state.loading = true;
    },
    [startLogin.fulfilled]:(state, action)=>{
       state.loading = false;
       if(!action.payload.error){
         state.user = action.payload.data.data.data.user;
         state.token = action.payload.data.data.data.token;
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
    //register
    [startRegister.pending]:(state, action)=>{
       state.loading = true;
    },
    [startRegister.fulfilled]:(state, action)=>{
       state.loading = false;
       if(!action.payload.error){
         state.user = action.payload.data.data.data.user;
         state.token = action.payload.data.data.data.token;
        }else{
          state.error = action.payload.error;
        }
        state.checking = false;
        state.logged = true;
    },
    [startRegister.rejected]:(state, action)=>{
       state.loading = false;
       state.error = action.payload;
       state.checking = false;
       state.logged = false;
    },
    //revalidation
    [startRenew.pending]:(state, action)=>{
       state.loading = true;
    },
    [startRenew.fulfilled]:(state, action)=>{
       state.loading = false;
       if(action.payload.data.data.success){
         state.user = action.payload.data.data.data.user;
         state.token = localStorage.getItem("token");
         state.logged = true;
        }else{
          state.error = action.payload.error;
          state.logged = false;
        }
        state.checking = false;
    },
    [startRenew.rejected]:(state, action)=>{
       state.loading = false;
       state.error = action.payload;
       state.checking = false;
       state.logged = false;
    },
  }
});


export const { setLogout } = authSlice.actions;
export default authSlice.reducer;