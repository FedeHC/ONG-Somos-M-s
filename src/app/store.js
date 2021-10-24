import { configureStore } from "@reduxjs/toolkit";
//reducers
import nosotros from './nosotros/nosotrosReducer';
import novedades from './novedades/novedadesReducer';

export default configureStore({
  reducer: {
    novedades,
    nosotros
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
