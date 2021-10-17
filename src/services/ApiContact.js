import {methodGetPublic, methodPostPublic} from "./publicApiService";


export const postContact = async(body) =>{
   const resp = await methodPostPublic("contacts",body);
   return resp;
}

export const getContact = async(body) =>{
 const resp = await methodGetPublic("contacts");
 return resp;
}
