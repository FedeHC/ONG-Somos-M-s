import { configureStore } from '@reduxjs/toolkit';
import slides from '../reducers/slides';

export default configureStore({
  reducer: {
    slides: slides,
  },
});
