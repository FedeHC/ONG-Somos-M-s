import { methodPostPrivate, methodPutPrivate } from "./privateApiService";
import { methodGetPublic } from "./publicApiService"


export const getCategories = async(id = null) => {
  const resp = await methodGetPublic("categories", id);
  return resp;
};

export const postCategory = async(body, headers) => {
  const resp = await methodPostPrivate("categories", body, headers);
  return resp;
};

export const putCategory = async(body, headers) => {
  const resp = await methodPutPrivate("categories", body, headers);
  return resp;
};
