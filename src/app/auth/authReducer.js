import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name:"auth",
  initialState:{
    logged:false,
    checking:false,
  },
  reducers:{

  }
});



export default authSlice.reducer;