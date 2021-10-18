import axios from "axios";
import { tokenValidate } from "./tokenValidate";

export const methodDeletePrivate = async (endpoint, id = null) => {
  try {
    if (!id) {
      throw new Error("No se encontró un id en la petición");
    }
    const response = await axios.delete(`${"url"}/${endpoint}/${id}`, {
      headers: tokenValidate(),
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
