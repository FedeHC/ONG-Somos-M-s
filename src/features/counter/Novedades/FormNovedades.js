import React from 'react';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Heading } from '@chakra-ui/layout';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Select } from '@chakra-ui/select';


// validaciones
const formSchema = Yup.object().shape({
  title: Yup.string()
        .min(4,"Se requieren 4 caracteres como mínimo")
        .required("Requerido"),
  content: Yup.string()
        .required("Requerido"),
  category: Yup.string()
        .required("Requerido"),
  image: Yup.string()
        .required("Requerido")
});




const Formnovedades = () => {
  return (
    <div>
    <Formik
      initialValues={{
        title: "",
        content: "",
        category:"",
        image:""
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form className="loginForm">
        <Heading m={4}>Formulario Novedades</Heading>
          <Field name="title">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.title && form.touched.title}>
                <FormLabel htmlFor="title">Titulo</FormLabel>
                <Input {...field} id="title" placeholder="Titulo" />
                <FormErrorMessage>{form.errors.title}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="content">
            {({ form }) => (
              <FormControl
                isInvalid={form.errors.content && form.touched.content}
              >
                <FormLabel htmlFor="content">Contenido</FormLabel>
                <CKEditor editor={ ClassicEditor }
                    id="content"
                    name="content"
                    data=""
                    onChange={ (e,editor) => {
                      const data = editor.getData();
                      formik.setFieldValue("content", data)
                    }} />
                <FormErrorMessage>{form.errors.content}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="category">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.category && form.touched.category}>
                <FormLabel htmlFor="category">Categoria</FormLabel>
                  <Select placeholder="elija una Categoria" {...field}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Select>
                <FormErrorMessage>{form.errors.category}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="image">
            {({form }) => (
              <FormControl isInvalid={form.errors.image && form.touched.image}>
                <FormLabel htmlFor="image">Imagen</FormLabel>
                <Input id="image"
                  type="file"
                  onChange={ (event) => {
                    const files = event.target.files;
                    let myFiles = Array.from(files);
                    formik.setFieldValue("image", myFiles[0]);
                  }} />
                <FormErrorMessage>{form.errors.image}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button mt={4} colorScheme="teal" type="submit">
            Ingresar
          </Button>
        </Form>
      )}
    </Formik>
  </div>
  );
}

export default Formnovedades;
