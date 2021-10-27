import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate, methodPutPrivate, methodDeletePrivate } from "./privateApiService";


// GET
export const getCategories = async(id=null) => {
  return await methodGetPublic("categories", id);
};

// POST
export const createCategory = async(body) => {
  return await methodPostPrivate("categories", body);
};

// PUT
export const updateCategory = async(id, body) => {
  return await methodPutPrivate("categories", id, body);
};

// DELETE
export const deleteCategory = async (id) => {
  return await methodDeletePrivate(`categories/${id}`, id);
};

