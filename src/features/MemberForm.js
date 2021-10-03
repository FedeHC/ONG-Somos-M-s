import React from "react";
import "./loginForm.scss";

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
import ReactHtmlParser from "react-html-parser";
const MemberForm = () => {
  const initialValues = {
    name: "",
    image: "",
    social: "",
    social2: "",
    description: "",
  };
  return (
    <Formik
      initialValues={initialValues}
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
                <FormLabel htmlFor="social">Link Redes Sociales 1</FormLabel>
                <Input {...field} id="social" placeholder="social" />
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
                <Input {...field} id="social2" placeholder="social2" />
                <FormErrorMessage>{form.errors.social2}</FormErrorMessage>
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
