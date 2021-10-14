import { tokenValidate } from "../features/methods/tokenValidate";

// PATCH
export const methodPatchPrivate = async (endpoint, id = null, body) => {
  try {
    !id && new Error("No existe id");
    const response = await axios.patch(`${url}/${endpoint}/${id}`, body, {
      headers: tokenValidate(),
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
