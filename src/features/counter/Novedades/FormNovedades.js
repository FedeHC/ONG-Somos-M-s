import React from 'react';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Heading } from '@chakra-ui/layout';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';

// validaciones
const formSchema = Yup.object().shape({
  title: Yup.string()
        .min(4,"Se requieren 4 caracteres como mínimo")
        .required("Requerido"),
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
