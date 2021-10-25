import { configureStore } from '@reduxjs/toolkit';
//reducers
import nosotros from '../reducers/nosotrosReducer';
import novedades from '../reducers/novedadesReducer';
import actividades from '../reducers/actividadesReducer';
import members from '../reducers/members';

export default configureStore({
  reducer: {
    novedades,
    nosotros,
    actividades,
    members,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
