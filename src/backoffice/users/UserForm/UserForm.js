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
import "./userForm.scss";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("email Invalido").required("Requerido"),
  name: Yup.string()
    .required("Requerido")
    .min(4, "Se requieren 4 caracteres como mínimo"),
  role: Yup.string().required("Requerido"),
  image: Yup.mixed()
    .required("Requerido")
    .test("type", "Solo se aceptan formatos jpg y png", (file) => {
      return file && (file.type === "image/jpg" || file.type === "image/png");
    }),
  password: Yup.string()
    .required("Requerido")
    .min(8, "Se requieren 8 caracteres como mínimo"),
});
/* const objetoPrueba = {
  name: "facu",
  email: "facuf@gmail.com",
  role: "Usuario",
  image: undefined,
  id: 1,
}; */
let objetoPrueba;

const UserForm = () => {
  // URL API:
  const API_URL = "http://ongapi.alkemy.org/api/users";

  return (
    <Formik
      initialValues={{
        name: objetoPrueba ? objetoPrueba.name : "",
        email: objetoPrueba ? objetoPrueba.email : "",
        role: objetoPrueba ? objetoPrueba.role : "",
        image: undefined,
        password: objetoPrueba ? objetoPrueba.password : "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(JSON.stringify(values));
        fetch(objetoPrueba ? `${API_URL}:${objetoPrueba.id}` : { API_URL }, {
          method: objetoPrueba ? "PATCH" : "POST",
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      }}
    >
      {({ errors, touched }) => (
        <Form className="userForm">
          <Heading m={4}>
            {objetoPrueba ? "Editar usuario" : "Crear usuario"}
          </Heading>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  {...field}
                  id="name"
                  placeholder={objetoPrueba ? objetoPrueba.name : "name"}
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  {...field}
                  id="email"
                  placeholder={objetoPrueba ? objetoPrueba.email : "email"}
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="role">
            {({ field, form }) => (
              <FormControl
                id="role"
                isInvalid={form.errors.role && form.touched.role}
              >
                <FormLabel>Rol</FormLabel>
                <Select
                  {...field}
                  id="role"
                  placeholder={objetoPrueba ? objetoPrueba.role : "role"}
                >
                  <option value="Administrador">Administrador</option>
                  <option value="Usuario">Usuario</option>
                </Select>
                <FormErrorMessage>{form.errors.role}</FormErrorMessage>
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
          <Field name="password">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder={
                    objetoPrueba ? objetoPrueba.password : "password"
                  }
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
  );
};

export default UserForm;
