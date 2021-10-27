import { methodGetPublic } from './publicApiService';
import {
  methodPostPrivate,
  methodPutPrivate,
  methodDeletePrivate,
} from './privateApiService';

const endPoint = process.env.REACT_APP_ENDPOINT_TESTIMONIALS || 'testimonials';

// GET
export const getTestimonials = async (id = null) => {
  return await methodGetPublic(endPoint, id);
};

// POST
export const createTestimony = async body => {
  return await methodPostPrivate(endPoint, body);
};

// PUT
export const updateTestimony = async (body, id) => {
  return await methodPutPrivate(endPoint, id, body);
};

// DELETE
export const deleteTestimony = async id => {
  return await methodDeletePrivate(`${endPoint}/${id}`, id);
};
