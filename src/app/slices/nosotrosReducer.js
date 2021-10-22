import { createSlice } from '@reduxjs/toolkit';

const nosotrosSlice = createSlice({
  name: 'nosotros',
  initialState: {
    nosotros: {},
    loading: null,
    error: null,
  },
  reducers: {},
});

export default nosotrosSlice.reducer;
