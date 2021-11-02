import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required("El nombre es requerido"),
  email: Yup.string()
    .email("Email invalido.")
    .required("El email es requerido."),

  password: Yup.string()
    .required("La contraseña es requerida.")
    .min(6, "Se requieren 6 caracteres como mínimo.")
    .matches(/(?=.*[A-z])/, "Se requiere al menos una (1) letra.")
    .matches(/(?=.*[0-9])/, "Se requiere al menos un (1) numero.")
    .matches(
      /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
      "Se requiere al menos un caracter especial."
    ),
  passwordConfirmation: Yup.string()
    .required("La contraseña es requerida.")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden."),
});

export const mostrarErrorTyc = () => {
  let myInput = document.getElementById("error");
  myInput.setAttribute("style", "visibility: visible");
};
