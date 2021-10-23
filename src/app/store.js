import { configureStore } from "@reduxjs/toolkit";
import categoriasReducer from "./categorias/categoriasReducer";



export default configureStore({
  reducer: {
    categorias:categoriasReducer
  },
});
