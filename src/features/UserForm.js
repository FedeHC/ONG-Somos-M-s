import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Select,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { Button } from "@chakra-ui/react";
import * as Yup from "yup";
import "./loginForm.scss";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("email Invalido").required("Requerido"),
  name: Yup.string()
    .required("Requerido")
    .min(4, "Se requieren 4 caracteres como mínimo"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        role: "",
        image: undefined,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="loginForm">
          <Heading m={4}>"Crear usuario"</Heading>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...field} id="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button mt={4} colorScheme="teal" type="submit">
            Ingresar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
