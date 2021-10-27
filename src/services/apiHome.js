import { methodGetPublic, methodPostPublic } from './publicApiService';

const endPoint = process.env.REACT_APP_ENDPOINT_ORGANIZATION || 'organization';

// GET
export const getHome = async () => {
  const resp = await methodGetPublic(endPoint);
  return resp;
};

// POST
export const postHome = async body => {
  const resp = await methodPostPublic(endPoint, body);
  return resp;
};
