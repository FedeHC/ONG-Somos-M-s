import { configureStore } from "@reduxjs/toolkit";
import actividades from './actividades/actividadesReducer';


export default configureStore({
  reducer: {
    actividades
  },
});
