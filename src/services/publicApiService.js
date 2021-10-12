import axios from "axios";

// POST
export const methodPostPublic = async (endpoint, body) => {
  try {
    const response = await axios.post(`${"url"}/${endpoint}`, body);
    return response;
  } catch (error) {
    return error;
  }
};
