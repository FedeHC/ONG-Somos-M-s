import { configureStore } from '@reduxjs/toolkit';
import users from '../reducers/users';
import slides from '../reducers/slides';

export default configureStore({
  reducer: {
    users: users,
    slides: slides,
  },
});
