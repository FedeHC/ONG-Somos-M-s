import React from "react";
import "./memberForm.scss";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
} from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formik, Form, Field } from "formik";
import { Button } from "@chakra-ui/react";
import * as Yup from "yup";

const regMatch =
  /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w?[a-zA-Z-_%/@?]+)*([^/\w?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Requerido")
    .min(4, "Se requieren 4 caracteres como mínimo"),
  description: Yup.string().required("Requerido"),
  image: Yup.mixed()
    .required("Requerido")
    .test("type", "Solo se aceptan formatos jpg y png", (file) => {
      return file && (file.type === "image/jpg" || file.type === "image/png");
    }),
  social: Yup.string()
    .required("Requerido")
    .matches(regMatch, "Debe ingresar URL válida"),
  social2: Yup.string()
    .required("Requerido")
    .matches(regMatch, "Debe ingresar URL válida"),
});

const objeto = {
  name: "facu",
  image: "",
  social: "facebook.com",
  social2: "instagram.com",
  description: "hola soy german",
  id: 1,
};
//let objeto;

const MemberForm = () => {
  const initialValues = {
    name: objeto ? objeto.name : "",
    image: "",
    social: objeto ? objeto.social : "",
    social2: objeto ? objeto.social2 : "",
    description: objeto ? objeto.description : "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="userForm">
          <Heading m={4}>{objeto ? "Editar miembro" : "Crear miembro"}</Heading>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="image">
            {({ field, form }) => (
              <FormControl
                m={2}
                id="image"
                isInvalid={form.errors.image && form.touched.image}
              >
                <FormLabel>Foto de perfil</FormLabel>
                <input
                  id="image"
                  name="image"
                  type="file"
                  onChange={(event) => {
                    const files = event.target.files;
                    let myFiles = Array.from(files);
                    form.setFieldValue("image", myFiles[0]);
                  }}
                />
                <FormErrorMessage>{form.errors.image}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="description">
            {({ field, form }) => (
              <FormControl
                id="description"
                isInvalid={form.errors.description && form.touched.description}
              >
                <CKEditor
                  editor={ClassicEditor}
                  data={initialValues.description}
                  value={initialValues.description}
                  onInit={(editor) => {
                    // You can store the "editor" and use when it's needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    form.setFieldValue("description", data);
                  }}
                />
                <FormErrorMessage>{form.errors.description}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="social">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.social && form.touched.social}
              >
                <FormLabel htmlFor="social">Link Redes Sociales</FormLabel>
                <Input {...field} id="social" placeholder="ingrese link" />
                <FormErrorMessage>{form.errors.social}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="social2">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.social2 && form.touched.social2}
              >
                <FormLabel htmlFor="social2">Link Redes Sociales</FormLabel>
                <Input {...field} id="social2" placeholder="ingrese link" />
                <FormErrorMessage>{form.errors.social2}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button mt={4} colorScheme="teal" type="submit">
            Guardar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MemberForm;
