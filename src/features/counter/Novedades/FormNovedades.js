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
import useAxios from '../../../hooks/useAxios';


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

// example object novedades
const object1 = {
  
}
const object2 = {
  title: "hola mundo",
  content: "<p> ejemplo de contenido </p>",
  category:"Eventos",
  image:""
}


const Formnovedades = () => {

  const initialValues ={
    title: "",
    content: "",
    category:"",
    image:""
  };

  // categories
  const { response, error, loading} = useAxios({
    method: 'Get',
    url: 'http://ongapi.alkemy.org/api/categories',
  });
  
  const isObjEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }
  
  
  return (
    <div>
    <Formik
      initialValues={ isObjEmpty(object2) ? initialValues : object2}
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
                    data={formik.values.content}
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
                  {
                    !loading 
                     && ( error 
                     ? <Input value={error} isDisabled />
                     : <Select placeholder="elija una Categoria" {...field}>
                        {response.data.map(category => <option key={category.id}>{category.name}</option>)}
                       </Select>)}
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
