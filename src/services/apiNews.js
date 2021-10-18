import { methodGetPublic } from "./publicApiService";
import {
  methodPostPrivate,
  methodPutPrivate,
  methodDeletePrivate,
} from "./privateApiService";

export const getNews = async (id = null) => {
  return await methodGetPublic("activities", id);
};

export const createNews = async (body) => {
  return await methodPostPrivate("activities", body);
};

export const updateNews = async (body, id) => {
  return await methodPutPrivate("activities", id, body);
};

export const deleteNews = async (id) => {
  return await methodDeletePrivate(`activities/${id}`, id);
};

export const tokenValidation = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  }
};
