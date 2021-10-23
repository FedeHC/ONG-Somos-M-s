import { configureStore } from "@reduxjs/toolkit";
import { slidesReducer } from "../reducers/slidesReducer";

export default configureStore({
  reducer: {
    slides: slidesReducer
  },
});
