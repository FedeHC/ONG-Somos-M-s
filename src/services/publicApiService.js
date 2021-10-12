import axios from 'axios';

// GET
export const methodGetPublic = async (endpoint, id = null) => {
  try {
    const response = await axios.get(`${'url'}/${endpoint}/${id || ""}`);
    return response;
  } catch (error) {
    return error;
  }
};
