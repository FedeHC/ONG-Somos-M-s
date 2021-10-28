import { methodGetPublic } from './publicApiService';
import {
  methodPostPrivate,
  methodPutPrivate,
  methodDeletePrivate,
} from './privateApiService';

const endPoint = process.env.REACT_APP_ENDPOINT_PROJECTS || 'projects';

// GET
export const getProjects = async (id = null) => {
  return await methodGetPublic(endPoint, id);
};

// POST
export const createProject = async body => {
  return await methodPostPrivate(endPoint, body);
};

// PUT
export const updateProject = async (body, id) => {
  return await methodPutPrivate(endPoint, id, body);
};

// DELETE
export const deleteProject = async id => {
  return await methodDeletePrivate(`${endPoint}/${id}`, id);
};
