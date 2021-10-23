import { configureStore } from "@reduxjs/toolkit";
//reducers
import nosotros from './nosotros/nosotrosReducer';


export default configureStore({
  reducer: {
    nosotros
  },
});
