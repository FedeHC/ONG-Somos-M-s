import { methodGetPublic, methodPostPublic } from "./publicApiService";

const endpointContacts = process.env.REACT_APP_ENDPOINT_CONTACTS;

export const postContact = async (body) => {
  const resp = await methodPostPublic(endpointContacts, body);
  return resp;
};

export const getContact = async (body) => {
  const resp = await methodGetPublic(endpointContacts);
  return resp;
};
