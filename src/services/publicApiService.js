import axios from 'axios';

// GET
export const methodGetPublic = async (endpoint, id = null) => {
  try {
    const response = await axios.get(`${url}/${endopoint}/${id || ""}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
