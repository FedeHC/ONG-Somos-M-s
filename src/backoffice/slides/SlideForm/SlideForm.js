import React from "react";
import {Formik, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  useCreateSlide,
  useEditSlide,
} from "../../../HTTPServices/slidesServices";

const MAX_FILE_SIZE = 10485760;

const SlideForm = ({form}) => {
  const initialValues = {
    name: form?.name ? form.name : "",
    order: form?.order ? form.order : "",
    description: form?.description ? form.description : "",
    image: form?.image ? form.image : "",
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Este campo es requerido.")
      .min(4, "Debe contener al menos 4 caracteres."),
    order: Yup.number().required("Este campo es requerido"),
    description: Yup.string().required("Este campo es requerido."),
    image: Yup.mixed()
      .required("Este campo es requerido.")
      .test(
        "fileSize",
        "El archivo es mayor a 10 MB",
        (file) => file && file.size <= MAX_FILE_SIZE
      )
      .test("type", "Sólo PNG y JPG", (file) => {
        return (
          file &&
          (file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png")
        );
      }),
  });

  const submitHandler = async (values) => {
    if (form && form.id) {
      // useEditSlide(REACT_APP_ENDPOINT_SLIDES_EDIT + form.id, values);
    } else {
      // useCreateSlide(REACT_APP_ENDPOINT_SLIDES_CREATE, values);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={submitHandler}
    >
      {(formik) => {
        return (
          <Form>
            <label>Nombre</label>
            <div>
              <input
                isRequired
                type="text"
                name="name"
                placeholder="Tu nombre acá"
              />
              <ErrorMessage name="name" component="div" className="error"/>
            </div>

            <label>Order</label>
            <div>
              <input type="number" name="order"/>
              <ErrorMessage name="order" component="div" className="error"/>
            </div>

            <label name="descripcion">Descripción</label>
            <CKEditor
              editor={ClassicEditor}
              id="description"
              name="description"
              data={initialValues.description}
              onChange={(event, editor) => {
                const data = editor.getData();
                formik.setFieldValue("description", data);
              }}
            />
            <ErrorMessage
              name="description"
              component="div"
              className="error"
            />

            <label name="image">Imágen</label>
            <div>
              <input
                isRequired
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  const files = event.target.files;
                  let myFiles = Array.from(files);
                  formik.setFieldValue("image", myFiles[0]);
                }}
              />
            </div>

            <ErrorMessage name="image" component="div" className="error"/>

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SlideForm;
