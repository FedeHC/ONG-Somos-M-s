import { configureStore } from "@reduxjs/toolkit";
//reducers
import nosotros from './nosotros/nosotrosReducer';
import novedades from './novedades/novedadesReducer';
import actividades from './actividades/actividadesReducer';

export default configureStore({
  reducer: {
    novedades,
    nosotros,
    actividades
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
