import { methodGetPublic } from "./publicApiService";
import {
  methodPostPrivate,
  methodPutPrivate,
  methodDeletePrivate,
} from "./privateApiService";

export const getUsers = async (id = null) => {
  return await methodGetPublic("users", id);
};

export const createUser = async (body) => {
  return await methodPostPrivate("users", body);
};

export const updateUser = async (body, id) => {
  return await methodPutPrivate("users", id, body);
};

export const deleteUser = async (id) => {
  return await methodDeletePrivate("users", id);
};
