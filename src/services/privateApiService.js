const methodGetPrivate = async (endpoint, id = null, headers) => {
  try {
    const response = await axios.get(`${url}/${endpoint}/${id || ""}`, {
      headers,
    });
    return response; 
  } catch (error) {
    console.error(error);
    return error; 
  }
};

export default methodGetPrivate;
