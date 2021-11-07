import { methodGetPublic } from './publicApiService';
import {
  methodPostPrivate,
  methodPutPrivate,
  methodDeletePrivate,
} from './privateApiService';

const endPoint = process.env.REACT_APP_ENDPOINT_CATEGORIES || 'categories';

// GET
export const getCategories = async (id = null) => {
  return await methodGetPublic(endPoint, id);
};

// POST
export const createCategory = async body => {
  return await methodPostPrivate(endPoint, body);
};

// PUT
export const updateCategory = async (id, body) => {
  return await methodPutPrivate(endPoint, id, body);
};

// DELETE
export const deleteCategory = async id => {
  return await methodDeletePrivate(endPoint, id);
};
