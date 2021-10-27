import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate, methodPutPrivate, methodDeletePrivate } from "./privateApiService";


const endPoint = process.env.REACT_APP_ENDPOINT_SLIDES;

// GET
export const slidesList = async (id=null) => {
  return await methodGetPublic(endPoint, id);
};

// POST
export const createSlides = async (body) => {
  return await methodPostPrivate(endPoint, body);
};

// PUT
export const updateSlides = async (body, id) => {
  return await methodPutPrivate(endPoint, id, body);
};

// DELETE
export const deleteSlides = async (id) => {
  return await methodDeletePrivate(`${endPoint}/${id}`, id);
};
