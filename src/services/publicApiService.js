import axios from 'axios';

// GET
export const methodGetPublic = async (endpoint, id = null) => {
  try {
    const response = await axios.get(`${url}/${endpoint}/${id || ""}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
