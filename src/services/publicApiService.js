import axios from 'axios';

// GET
export const methodGetPublic = async (endpoint, id = null) => {
  try {
    return await axios.get(`${'url'}/${endpoint}/${id || ""}`);
  } catch (error) {
    return error;
  }
};

export const methodPostPublic = async (endpoint, body) => {
  try {
    return await axios.post(`${"url"}/${endpoint}`, body);
  } catch (error) {
    return error;
  }
};
