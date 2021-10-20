import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate } from "./privateApiService";


export const showOrg = async() => {
  const response = await methodGetPublic("organization");
  return response;
};

export const editOrg = async(body) => {
  const response = await methodPostPrivate("organization", body);
  return response;
};