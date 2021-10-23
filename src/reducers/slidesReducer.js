import { useListSlides } from '../services/slidesServices';
import { types } from '../types/types';

const initialState = null;

export const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SLIDES:
      return action.payload;

    default:
      return state;
  }
};

export const listSlides = () => {
  return async dispatch => {
    const { data } = await useListSlides(process.env.REACT_APP_ENDPOINT_SLIDES);

    dispatch({
      type: types.SLIDES,
      payload: data,
    });
  };
};
