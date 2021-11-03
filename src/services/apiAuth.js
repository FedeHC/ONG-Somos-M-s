import axios from 'axios';

const url = "https://note-app-back-end.herokuapp.com/api";

export const loginUser = async (endpoint, body) => {
 const resp={data:null,error:null};
 try {
   resp.data = await axios.post(`${url}/${endpoint}`, body);
   return resp;
 } catch (error) {
   resp.error = error;
   return resp;
 }
};

export const registerUSer = async (endpoint, body) => {
 const resp={data:null,error:null};
 try {
   resp.data =  await axios.post(`${url}/${endpoint}`, body);
   return resp;
 } catch (error) {
   resp.error = error;
   return resp;
 }
};

export const revalidationUser = async (endpoint) => {
 const resp={data:null,error:null};
 const token = localStorage.getItem("token" || "");
 try {
   resp.data =  await axios.get(`${url}/${endpoint}`,{headers:{"x-token":token}});
   return resp;
 } catch (error) {
   resp.error = error;
   return resp;
 }
};

