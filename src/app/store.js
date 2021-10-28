import {configureStore} from "@reduxjs/toolkit";
//reducers
import nosotros from './nosotros/nosotrosReducer';
import novedades from './novedades/novedadesReducer';
import actividades from './actividades/actividadesReducer';
import categoriasReducer from "./categorias/categoriasReducer";
import members from "./members/members";
import slides from "./slides/slides";
import users from './users/users';

export default configureStore({
  reducer: {
    novedades,
    nosotros,
    actividades,
    categorias:categoriasReducer,
    slides,
    users,
    members
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
