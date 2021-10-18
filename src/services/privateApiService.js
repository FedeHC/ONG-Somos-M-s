import axios from "axios";
import { tokenValidate } from "../features/methods/tokenValidate";

// PATCH
export const methodPatchPrivate = async (endpoint, id = null, body) => {
  try {
    !id && new Error("No existe id");
    const response = await axios.patch(`${url}/${endpoint}/${id}`, body, {
      headers: tokenValidate(),
    });
    return response;
  } catch (error) {
    return error;
  }
};


// POST
export const methodPostPrivate = async (endpoint, body, headers) => {
  try {
    return await axios.post(`${"url"}/${endpoint}`, body, { headers });
  } catch (error) {
    console.error(error);
  }
};

//PUT
export const methodPutPrivate = async (endpoint, id = null, body) => {
  try {
    !id && new Error("No existe id");
    const response = await axios.put(`${url}/${endpoint}/${id}`, body, {
      headers:tokenValidate()
    });
    return response;
  } catch (error) {
    return error;
  }
}
