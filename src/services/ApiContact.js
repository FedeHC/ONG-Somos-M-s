import { methodGetPublic, methodPostPublic } from "./publicApiService";


const endPoint = process.env.REACT_APP_ENDPOINT_CONTACTS;

// GET
export const getContact = async (body) => {
  return await methodGetPublic(endPoint);
};

// POST
export const postContact = async (body) => {
  return await methodPostPublic(endPoint, body);
};
