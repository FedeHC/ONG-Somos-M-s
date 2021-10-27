import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate, methodPutPrivate, methodDeletePrivate } from "./privateApiService";


const endPoint = process.env.REACT_APP_ENDPOINT_ACTIVITIES;

// GET
export const showActivities = async (id=null) => {
  return await methodGetPublic(endPoint, id);
};

// POST
export const createActivity = async (body) => {
  return await methodPostPrivate(endPoint, body);
};

// PUT
export const updateActivity = async (body, id) => {
  return await methodPutPrivate(endPoint, id, body);
};

// DELETE
export const deleteActivity = async (id) => {
  return await methodDeletePrivate(`${endPoint}/${id}`, id);
};

