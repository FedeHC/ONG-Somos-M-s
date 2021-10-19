import Swal from "sweetalert2";

export const succesAlert = (title, text) =>{
 Swal.fire({
  icon: 'success',
  title: title || 'Hecho',
  text: text || 'Tarea realizada con éxito',
  confirmButtonColor:"#00214D",
  toast:true
 })
};

export const errorAlert = (title, text) =>{
 Swal.fire({
  icon: 'error',
  title: title || 'Oops...',
  text:  text || 'Ocurrió un error inesperado.!!',
  confirmButtonColor:"#00214D",
  toast:true
})
};
