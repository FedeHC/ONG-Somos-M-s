import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { Button } from "@chakra-ui/react";
import * as Yup from "yup";

const MemberForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        image: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="loginForm">
          <Heading m={4}>Login</Heading>
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

          <Button mt={4} colorScheme="teal" type="submit">
            Ingresar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MemberForm;
