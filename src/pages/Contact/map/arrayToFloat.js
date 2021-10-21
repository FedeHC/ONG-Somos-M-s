export const convertFloat=(data) =>{
 let resp=[];
 data = data.slice(0,-1).slice(1);
 const array = data.split(",");
 array.forEach(ele => resp.push(parseFloat(ele)));
 return resp;
}