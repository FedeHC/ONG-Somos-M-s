import * as yup from "yup";

// Max. file size (= 10 MB)
const MAX_FILE_SIZE = 10485760;

const testimonialSchema = yup.object().shape({
        name: yup.string()
          .required("Campo requerido.")
          .min(4, "Debe contener al menos 4 caracteres."),
        description: yup.string()
          .required("Campo requerido."),
        image: yup.mixed()
          .required("Campo requerido.")
          .test("fileSize",
                "El archivo es mayor a 10 MB",
                (file) => file && file.size <= MAX_FILE_SIZE)
          .test("type",
                "Solo se aceptan los sig. formatos de imágen: jpeg, jpg y png",
                (file) => {
            return file && (
              file.type === "image/jpeg" ||
              file.type === "image/jpg" ||
              file.type === "image/png"
            )})
})

export default testimonialSchema;
