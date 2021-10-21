import { methodDeletePrivate, methodPostPrivate, methodPutPrivate } from "./privateApiService";
import { methodGetPublic } from "./publicApiService";

export const getMembers = async (id = null) => {
  return await methodGetPublic("members", id);
};

export const deleteMembers = async (id) => {
  return await methodDeletePrivate("members", id);
};

export const createMember = async (body) => {
  return await methodPostPrivate("members", body);
};

export const updateMember = async (body, id) => {
    return await methodPutPrivate("members", id, body);
  };
  