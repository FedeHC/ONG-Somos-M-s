import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@chakra-ui/react';
import * as Yup from 'yup';
import './loginForm.scss';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('email Invalido').required('Requerido'),

  password: Yup.string()
    .required('Requerido')
    .min(6, 'Se requieren 6 caracteres como mínimo')
    .matches(/^(?=.*[@$!%*#?&])/, '1 caracter especial requerido')
    .matches(/(?=.*\d)/, 'al menos 1 numero requerido')
    .matches(/(?=\w*[a-z])/, 'al menos 1 letra requerida'),
});

const LoginForm = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="loginForm">
          <Heading m={4}>Login</Heading>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <Input
                  {...field}
                  type="password"
                  id="password"
                  placeholder="contraseña"
                />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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

export default LoginForm;
