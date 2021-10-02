import React from "react";
import { Formik, Form, ErrorMessage, useField } from "formik";
import * as yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./OrgForm.scss";


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


function OrgForm() {
  // Initial form values for Formik component:
  const initialValues = {
    name: "",
    logo: "",
    shortDescription: "",
    longDescription: "",
    links: ""
  };

  // Yup schema for Formik component:
  const schema = yup.object().shape({
    name: yup.string().required("Campo requerido."),
    logo: yup.mixed().required("Campo requerido.")            
             .test("type",
                   "Solo se aceptan los sig. formatos de imágen: jpeg, jpg y png",
                   (file) => {
               return file && (
                 file.type === "image/jpeg" ||
                 file.type === "image/jpg" ||
                 file.type === "image/png"
               )})
              .test("fileSize",
                    "El archivo es mayor a 10 MB",
                    (file) => file && file.size <= MAX_FILE_SIZE),
    shortDescription: yup.string().required("Campo requerido."),
    longDescription: yup.string().required("Campo requerido."),
    links: yup.string().url("Debe contener una URL válida (Ej: https://www.google.com.ar).")     
  });

  // Async handler for sending form data used by the Formik component:
  const submitHandler = async (values, {setStatus, resetForm, setSubmitting }) => {
    try {      
      // API:
      const response = await fetch("", 
                                   { method: "",
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
      console.error(`# Error on fetch:\n- Details: ${error}`);
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

              {/* Logo file input */}
              <label name="logo">Logo: </label>
              <br />
              <input id="logo"
                     name="logo"
                     type="file"
                     onChange={ (event) => {
                      const files = event.target.files;
                      let myFiles = Array.from(files);
                      formik.setFieldValue("logo", myFiles[0]); }} />
              <br />
              <ErrorMessage name="logo"
                            component="div"
                            className="error" />
              <br /><br />

              {/* shortDescription input */}
              <label name="shortDescription">Descripción corta: </label>
              <br />
              <CKEditor editor={ ClassicEditor }
                        id="shortDescription"
                        name="shortDescription"
                        data={initialValues.shortDescription}
                        onChange={ (event, editor) => {
                          const data = editor.getData();
                          formik.setFieldValue("shortDescription", data) }} />
              <ErrorMessage name="shortDescription"
                            component="div"
                            className="error" />
              <br />

              {/* longDescription input */}
              <TextInput label="Descripción larga:"
                         name="longDescription"
                         type="text" />
              <br /><br />

              {/* links input */}
              <TextInput label="Links: "
                         name="links"
                         type="text" />
              <br /><br />

              {/* Submit button */}
              <button type="submit">Enviar</button>
            </Form>
          );
      }}
    </Formik>
  );
}

export default OrgForm;
