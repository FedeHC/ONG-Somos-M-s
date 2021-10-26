import axios from 'axios';
import { tokenValidate } from './tokenValidate';

// Listar todos los Slides o mostrar uno especifico por ID
export const slidesList = async (endpoint, body) => {
  try {
    const data = await axios
      .get(endpoint, {
        headers: tokenValidate('tokenName'),
        body,
      })
      .then(res => res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Crear un nuevo Slide
export const createSlide = async (endpoint, body) => {
  try {
    const data = await axios
      .post(endpoint, {
        headers: tokenValidate('tokenName'),
        body,
      })
      .then(res => res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Editar un Slide
export const editSlides = async (endpoint, body) => {
  try {
    const data = await axios
      .put(endpoint, {
        headers: tokenValidate('tokenName'),
        body,
      })
      .then(res => res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Eliminar un Slide
export const deleteSlides = async (endpoint, body) => {
  try {
    const data = await axios
      .delete(endpoint, {
        headers: tokenValidate('tokenName'),
        body,
      })
      .then(res => res);
    return data;
  } catch (error) {
    console.log(error);
  }
};
