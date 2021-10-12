import React from "react";
import { Formik, Form, ErrorMessage, useField } from "formik";
import * as yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./CategoriesForm.scss";


// URL API:
const API_URL = "http://ongapi.alkemy.org/api";

// Max. file size for input file upload:
const MAX_FILE_SIZE = 10485760; // 10 MB.


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

function CategoriesForm({ form }) {
  // Initial form values for Formik component:
  const initialValues = {
    name: form?.name ? form.name : "",
    description: form?.description ? form.description : "",
    image: form?.image ? form.image : "", 
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

  // Async handler for sending form data used by the Formik component:
  const submitHandler = async (values, {setStatus, resetForm, setSubmitting }) => {
    try {
      let response, string, method;
      // If form object is received in props, submit by PUT method:
      if(form && form.id) {
        string = `${API_URL}/categories/${form.id}`;
        method = "PUT";
      }
      // Otherwise by POST method:
      else {
        string = `${API_URL}/categories`;
        method = "POST"
      }

      // API:
      response = await fetch(string, 
                             { method: method,
                               body: JSON.stringify(values),
                               headers: { "Content-Type": "application/json" }
                             });
      
      if(response.status === 200) {
        console.log("# Data sent with success.");
        resetForm({});
        setStatus({ success: true });
      }
      else {
        console.error("# Data can't be sent.");
        setStatus({ success: false });
      }
    }
    catch(error) {
      console.error(`# Error on fetch (PUT):\n- Details: ${error}`);
    }
    setSubmitting(false);
  };

  // Rendering Formik form component:
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
                        data={initialValues.description}
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
