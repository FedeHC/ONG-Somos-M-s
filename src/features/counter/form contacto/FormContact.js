import React from 'react';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Heading } from '@chakra-ui/layout';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Center } from "@chakra-ui/react"


// validaciones
const ContactSchema = Yup.object().shape({
 name: Yup.string()
       .required("Requerido"),
});


const Formcontact = () => {
 return (
  <Center>
    <Formik
      initialValues={{
       name:"",
       email:"",
       phone:Number,
       message:""
      }}
      validationSchema={ContactSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form className="form-contact">
        <Heading m={4}>Contactate con nosotros</Heading>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <Input {...field} id="name" placeholder="Nombre" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button mt={4} colorScheme="teal" type="submit">
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
   
  </Center>
 );
}

export default Formcontact;
