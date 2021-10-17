import { methodGetPublic, methodPostPublic } from "./publicApiService"


export const getHome = async() => {
  const resp = await methodGetPublic("organization");
  return resp;
};

export const postHome = async(body) => {
  const resp = await methodPostPublic("organization", body);
  return resp;
};