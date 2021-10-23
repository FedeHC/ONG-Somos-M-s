import { configureStore } from "@reduxjs/toolkit";

import novedades from './novedades/novedadesReducer';

export default configureStore({
  reducer: {
    novedades
  },
});
