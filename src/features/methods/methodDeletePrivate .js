export const methodDeletePrivate  = async (endpoint, id = null, headers) => {
  try {
    if (!id) {
      throw new Error("No se encontró un id en la petición");
    }
    const response = await axios.delete(`${url}/${endpoint}/${id}`, {
      headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
