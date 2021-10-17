import { methodGetPublic } from "./publicApiService"


export const getHome = async() => {
  const resp = await methodGetPublic("organization");
  return resp;
};