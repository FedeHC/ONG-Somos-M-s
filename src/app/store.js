import { configureStore } from "@reduxjs/toolkit";
//reducers
import nosotros from './slices/nosotrosReducer';


export default configureStore({
  reducer: {
    nosotros
  },
});
