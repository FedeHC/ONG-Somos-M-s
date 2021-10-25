import { configureStore } from "@reduxjs/toolkit";
//reducers
import nosotros from './nosotros/nosotrosReducer';
import novedades from './novedades/novedadesReducer';
import actividades from './actividades/actividadesReducer';
import categoriasReducer from "./categorias/categoriasReducer";

export default configureStore({
  reducer: {
    novedades,
    nosotros,
    actividades,
    categorias:categoriasReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
