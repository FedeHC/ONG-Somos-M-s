import axios from "axios";
import { tokenValidate } from "../methods/tokenValidate";

export const listSlides = async (endpoint, body) => {
  try {
    const response = await axios.get(endpoint, tokenValidate(), body);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createSlides = async (endpoint, body) => {
  try {
    const response = await axios.post(endpoint, tokenValidate(), body);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const editSlides = async (endpoint, body) => {
  try {
    const response = await axios.put(endpoint, tokenValidate(), body);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteSlides = async (endpoint, body) => {
  try {
    const response = await axios.delete(endpoint, tokenValidate(), body);
    return response;
  } catch (error) {
    console.error(error);
  }
};
