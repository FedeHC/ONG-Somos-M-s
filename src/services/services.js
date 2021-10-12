
const getApi = (enpoint, id) => {
  return fetch(enpoint, {
    method: "GET",
    headers: {
        authorization: {
            id
        }
    } 
  });
};


export default getApi; 
                    