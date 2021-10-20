import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate, methodPutPrivate, methodDeletePrivate } from "./privateApiService";


// GET
export const showActivities = async (id=null) => {
  return await methodGetPublic("activities", id);
};

// POST
export const createActivity = async (body) => {
  return await methodPostPrivate("activities", body);
};

// PUT
export const updateActivity = async (body, id) => {
  return await methodPutPrivate("activities", id, body);
};

// DELETE
export const deleteActivity = async (id) => {
  return await methodDeletePrivate(`activities/${id}`, id);
};

