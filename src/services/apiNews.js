import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate, methodPutPrivate, methodDeletePrivate } from "./privateApiService";


export const getNews = async (id = null) => {
  if(id)
    return await methodGetPublic("news", id);
  else
    return await methodGetPublic("news?limit=10");  // Limit results to 10.
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
