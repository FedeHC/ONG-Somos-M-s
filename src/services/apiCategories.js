import { methodPostPrivate, methodPutPrivate } from "./privateApiService";
import { methodGetPublic } from "./publicApiService"
const endpointCategories = process.env.REACT_APP_ENDPOINT_CATEGORIES;

export const getCategories = async(id = null) => {
  const resp = await methodGetPublic(endpointCategories, id);
  return resp;
};

export const postCategory = async(body) => {
  const resp = await methodPostPrivate(endpointCategories, body);
  return resp;
};

export const putCategory = async(idCategory , body) => {
  const resp = await methodPutPrivate(endpointCategories, idCategory, body);
  return resp;
};
