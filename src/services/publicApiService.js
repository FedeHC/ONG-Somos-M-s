import axios from 'axios';


const url = process.env.REACT_APP_ENDPOINT_MAIN_URL;

// GET
export const methodGetPublic = async (endpoint, id=null) => {
  try {
    return await axios.get(`${url}/${endpoint}/${id || ""}`);
  } catch (error) {
    return error;
  }
};

// POST
export const methodPostPublic = async (endpoint, body) => {
  try {
    return await axios.post(`${url}/${endpoint}`, body);
  } catch (error) {
    return error;
  }
};
