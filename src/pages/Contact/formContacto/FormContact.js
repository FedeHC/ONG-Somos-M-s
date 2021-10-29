import React from 'react';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Heading } from '@chakra-ui/layout';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Textarea } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { postContact } from '../../../services/ApiContact';
import { createContacto } from '../../../app/nosotros/nosotrosReducer';

// validation
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
  email: Yup.string().required('Requerido').email('Email invalido'),
  phone: Yup.string()
    .required('Requerido')
    .matches(/^[0-9]+$/, 'Solo ingresar números')
    .min(8, 'minimo 8 números'),
  message: Yup.string().required('Requerido'),
});

const Formcontact = () => {
  let dispatch = useDispatch();

  return (
    <Box p={4} borderWidth="1px" rounded="lg">
      <Center>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            message: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={async (values, { resetForm }) => {
            dispatch(createContacto);
            resetForm({});
          }}
        >
          {formik => (
            <Form className="form-contact">
              <Heading m={4}>Contactate con nosotros</Heading>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Nombre</FormLabel>
                    <Input {...field} id="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                    <Input {...field} id="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.phone && form.touched.phone}
                  >
                    <FormLabel htmlFor="phone">Número de teléfono</FormLabel>
                    <Input {...field} type="tel" id="phone" />
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="message">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.message && form.touched.message}
                  >
                    <FormLabel htmlFor="message">Mensaje</FormLabel>
                    <Textarea
                      {...field}
                      placeholder="Escribe tu consulta"
                      id="message"
                    />
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
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
    </Box>
  );
};

export default Formcontact;
