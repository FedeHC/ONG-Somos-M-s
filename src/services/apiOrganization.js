import { methodGetPublic } from "./publicApiService";
import { methodPostPrivate } from "./privateApiService";


export const showOrg = async() => {
  return await methodGetPublic("organization");
};

export const editOrg = async(body) => {
  return await methodPostPrivate("organization", body);
};
