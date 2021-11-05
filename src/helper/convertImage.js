
 
export function getBase64FomFile(img, callback){
 let fileReader = new FileReader();
 fileReader.addEventListener('load',function(evt){
   callback(fileReader.result);
 });
 fileReader.readAsDataURL(img);
};