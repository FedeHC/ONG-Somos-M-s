import { methodGetPublic } from './publicApiService';
import {
  methodPostPrivate,
  methodPutPrivate,
  methodDeletePrivate,
} from './privateApiService';

const endPoint = process.env.REACT_APP_ENDPOINT_NEWS || 'news';

// GET
export const getNews = async (id = null) => {
  if (id) return await methodGetPublic(endPoint, id);
  else return await methodGetPublic(endPoint);
};

// POST
export const createNews = async body => {
  return await methodPostPrivate(endPoint, body);
};

// PUT
export const updateNews = async (body, id) => {
  return await methodPutPrivate(endPoint, id, body);
};

// DELETE
export const deleteNews = async id => {
  return await methodDeletePrivate(endPoint, id);
};
