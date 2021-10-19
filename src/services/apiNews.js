import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate, methodPutPrivate, methodDeletePrivate } from "./privateApiService";


export const getNews = async (id = null) => {
  return await methodGetPublic("news?limit=10", id);
};

export const createNews = async (body) => {
  return await methodPostPrivate("news", body);
};

export const updateNews = async (body, id) => {
  return await methodPutPrivate("news", id, body);
};

export const deleteNews = async (id) => {
  return await methodDeletePrivate("news", id);
};
