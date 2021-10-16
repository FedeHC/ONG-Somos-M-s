import {methodPostPublic} from "./publicApiService";


export const postContact = async(body) =>{
   const resp = await methodPostPublic("contacts",body);
   return resp;
}
