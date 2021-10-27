import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate } from "./privateApiService";


const endPoint = process.env.REACT_APP_ENDPOINT_ORGANIZATION;

// GET
export const showOrg = async() => {
  return await methodGetPublic(endPoint);
};

// POST
export const editOrg = async(body) => {
  return await methodPostPrivate(endPoint, body);
};
