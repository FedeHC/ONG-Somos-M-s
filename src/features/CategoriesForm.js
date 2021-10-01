import React from "react";
import { Formik, Form, ErrorMessage, useField } from "formik";
import * as yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./CategoriesForm.scss";


// Max. file size (= 10 MB)
const MAX_FILE_SIZE = 10485760;

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <br />

      <input className="text-input" {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function CategoriesForm() {
  // Initial form values for Formik component:
  const initialValues = {
    name: "",
    description: "",
    image: "", 
  };

  // Yup schema for Formik component:
  const schema = yup.object().shape({
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
  });

  const submitHandler = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={submitHandler} >
        {(formik) => {
          return (
            <Form>
              {/* Name input */}
              <TextInput label="Nombre:"
                         name="name"
                         type="text" />
              <br /><br />

              {/* Description input */}
              <label name="image">Descripción: </label>
              <br />
              <CKEditor editor={ ClassicEditor }
                        id="description"
                        name="description"
                        data=""
                        onChange={ (event, editor) => {
                          const data = editor.getData();
                          formik.setFieldValue("description", data) }} />
              <ErrorMessage name="description"
                            component="div"
                            className="error" />
              <br />

              {/* Image file input */}
              <label name="image">Imagen: </label>
              <br />
              <input id="image"
                     name="image"
                     type="file"
                     onChange={ (event) => {
                      const files = event.target.files;
                      let myFiles = Array.from(files);
                      formik.setFieldValue("image", myFiles[0]); }} />
              <br />
              <ErrorMessage name="image"
                            component="div"
                            className="error" />
              <br /><br />

              {/* Submit button */}
              <button type="submit">Enviar</button>
            </Form>
          );
      }}
    </Formik>
  );
}

export default CategoriesForm;
