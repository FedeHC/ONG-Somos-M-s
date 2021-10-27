import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate, methodPutPrivate, methodDeletePrivate } from "./privateApiService";


// GET
export const getTestimonials = async (id=null) => {
  return await methodGetPublic("testimonials", id);
};

// POST
export const createTestimony = async (body) => {
  return await methodPostPrivate("testimonials", body);
};

// PUT
export const updateTestimony = async (body, id) => {
  return await methodPutPrivate("testimonials", id, body);
};

// DELETE
export const deleteTestimony = async (id) => {
  return await methodDeletePrivate(`testimonials/${id}`, id);
};
