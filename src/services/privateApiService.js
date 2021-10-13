import { tokenValidate } from '../features/methods/tokenValidate';

const methodGetPrivate = async (endpoint, id = null) => {
  try {
    const response = await axios.get(`${url}/${endpoint}/${id || ""}`, {
      headers: tokenValidate(),
    });
    return response;
  } catch (error) {
    return error;
  }
};

export default methodGetPrivate; 