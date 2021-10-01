import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";

const MAX_FILE_SIZE = 10485760;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Este campo es requerido")
    .min(4, "Se requieren 4 caracteres como mínimo"),
  description: Yup.string().required("Este campo es requerido"),
  order: Yup.string().required("Este campo es requerido").min(1, "blablabla"),
  image: Yup.mixed()
    .required("Campo requerido.")
    .test(
      "fileSize",
      "El archivo es mayor a 10 MB",
      (file) => file && file.size <= MAX_FILE_SIZE
    )
    .test(
      "type",
      "Solo se aceptan los sig. formatos de imágen: jpeg, jpg y png",
      (file) => {
        return (
          file &&
          (file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png")
        );
      }
    ),
});

const Slides = () => (
  <Formik
    initialValues={{
      name: "",
      description: "",
      order: "",
      image: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={({values}) => {
      console.log(values);
    }}
  >
    {({ handleSubmit, values, handleChange, handleBlur, setFieldValue }) => (
      <Form onSubmit={handleSubmit}>
        <Field name="name">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel>Nombre</FormLabel>
              <Input
                {...field}
                id="name"
                placeholder="Nombre"
                isRequired
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="description">
          {({ field, form }) => (
            <FormControl
              isInvalid={form.errors.description && form.touched.description}
            >
              <FormLabel id="description">Descripción</FormLabel>
              <CKEditor
                editor={ClassicEditor}
                id="description"
                name="description"
                data=""
                isRequired
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFieldValue("description", data);
                }}
              />
              <FormErrorMessage>{form.errors.description}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="order">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.order && form.touched.order}>
              <FormLabel>Order</FormLabel>
              <Input
                {...field}
                id="order"
                placeholder="Order"
                isRequired
                value={values.order}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{form.errors.order}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="image">
          {({ field, form }) => (
            <FormControl>
              <FormLabel>Imagen</FormLabel>
              <Input
                {...field}
                type="file"
                id="image"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{form.errors.image}</FormErrorMessage>
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

export default Slides;
