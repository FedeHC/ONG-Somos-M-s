import axios from "axios";
import { tokenValidate } from "./tokenValidate";


const url = process.env.REACT_APP_ENDPOINT_MAIN_URL ;

// POST
export const methodPostPrivate = async (endpoint, body, id = null) => {
  try {
    const response = await axios.post(`${url}/${endpoint}`, body, {
      headers: tokenValidate(),
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

// PUT
export const methodPutPrivate = async (endpoint, id = null, body) => {
  try {
    !id && new Error("No existe id");

    const response = await axios.put(`${url}/${endpoint}/${id}`, body, {
      headers: tokenValidate(),
    });

    return response;
  } catch (error) {
    return error;
  }
};

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

// DELETE
export const methodDeletePrivate = async (endpoint, id) => {
  try {
    !id && new Error("No existe id");

    const response = await axios.delete(`${url}/${endpoint}/${id}`, {
      headers: tokenValidate(),
    });

    return response;
  } catch (error) {
    return error;
  }
};
