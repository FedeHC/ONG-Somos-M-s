import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import users from '../reducers/users';
import slides from '../reducers/slides';

export default configureStore({
  reducer: {
    users: users,
    slides: slides,
  },
=======
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
>>>>>>> 14afdf341b8dbbc8c8805db16237107088164d8c
});
