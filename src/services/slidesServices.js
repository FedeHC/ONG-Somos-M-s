import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate, methodPutPrivate, methodDeletePrivate } from "./privateApiService";


// GET
export const slidesList = async (id=null) => {
  return await methodGetPublic("slides", id);
};

// POST
export const createSlides = async (body) => {
  return await methodPostPrivate("slides", body);
};

// PUT
export const updateSlides = async (body, id) => {
  return await methodPutPrivate("slides", id, body);
};

// DELETE
export const deleteSlides = async (id) => {
  return await methodDeletePrivate(`slides/${id}`, id);
};
