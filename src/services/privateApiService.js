import axios from 'axios';

// POST
export const methodPostPrivate = async (endpoint, body, headers) => {
  try {
    return await axios.post(`${"url"}/${endpoint}`, body, { headers });
  } catch (error) {
    console.error(error);
  }
}
