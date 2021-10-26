import { methodDeletePrivate, methodPostPrivate, methodPutPrivate } from "./privateApiService";
import { methodGetPublic } from "./publicApiService";

const membersEndPoint = process.env.REACT_APP_ENDPOINT_MEMBERS || "members";

export const getMembers = async (id = null) => {
  return await methodGetPublic(membersEndPoint, id);
};

export const deleteMembers = async (id) => {
  return await methodDeletePrivate(membersEndPoint, id);
};

export const createMember = async (body) => {
  return await methodPostPrivate(membersEndPoint, body);
};

export const updateMember = async (body, id) => {
    return await methodPutPrivate(membersEndPoint, id, body);
  };
  