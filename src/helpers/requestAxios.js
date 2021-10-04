import axios from "axios";

const requestAxios = async (method, url, dataToSend) => {
  try {
    const response = await axios[method](`http://ongapi.alkemy.org/api${url}`, dataToSend);
    return response
  } catch (err) {
    console.log(err);
  }

};

export default requestAxios;
