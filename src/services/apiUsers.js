import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate, methodPutPrivate, methodDeletePrivate } from "./privateApiService";


const endPoint = process.env.REACT_APP_ENDPOINT_USERS;

// GET
export const getUsers = async (id = null) => {
  return await methodGetPublic(endPoint, id);
};

// POST
export const createUser = async (body) => {
  return await methodPostPrivate(endPoint, body);
};

// PUT
export const updateUser = async (body, id) => {
  return await methodPutPrivate(endPoint, id, body);
};

// DELETE
export const deleteUser = async (id) => {
  return await methodDeletePrivate(endPoint, id);
};
