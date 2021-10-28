import {
  methodDeletePrivate,
  methodPostPrivate,
  methodPutPrivate,
} from './privateApiService';
import { methodGetPublic } from './publicApiService';

const endPoint = process.env.REACT_APP_ENDPOINT_MEMBERS || 'members';

// GET
export const getMembers = async (id = null) => {
  return await methodGetPublic(endPoint, id);
};

// POST
export const createMember = async body => {
  return await methodPostPrivate(endPoint, body);
};

// PUT
export const updateMember = async (body, id) => {
  return await methodPutPrivate(endPoint, id, body);
};

// DELETE
export const deleteMember = async id => {
  return await methodDeletePrivate(endPoint, id);
};
