import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { getUsers, createUser, updateUser } from "../../../services/apiUsers";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("email Invalido").required("Requerido"),
  name: Yup.string()
    .required("Requerido")
    .min(4, "Se requieren 4 caracteres como mínimo"),
  role: Yup.string().required("Requerido"),
  profile_image: Yup.mixed()
    .required("Requerido")
    .test("type", "Solo se aceptan formatos jpg y png", (file) => {
      return file && (file.type === "image/jpg" || file.type === "image/png");
    }),
  password: Yup.string()
    .required("Requerido")
    .min(8, "Se requieren 8 caracteres como mínimo"),
});
/* const objeto = {
  id: 520,
  name: "facu",
  email: "facuf@gmail.com",
  role: "Usuario",
  profile_image: undefined,
  password: "asdwasdwads",
}; */
/* let objeto = {};
 */

const initialValues = {
  name: "",
  email: "",
  role: "",
  profile_image: undefined,
  password: "",
};

const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const UserForm = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    let url = window.location.href;
    let id = url.substring(url.lastIndexOf("/") + 1);
    getUsers(id).then((response) => setUser(response.data.data));
    setId(id);
  }, []);

  return (
    <Formik
      initialValues={isObjEmpty(user) ? initialValues : user}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
        isObjEmpty(user) ? createUser(values) : updateUser(values, id);
      }}
    >
      {({ errors, touched }) => (
        <Form className="userForm">
          <Heading m={4}>{user ? "Editar usuario" : "Crear usuario"}</Heading>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  {...field}
                  id="name"
                  placeholder={user ? user.name : "name"}
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
                  placeholder={user ? user.email : "email"}
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
                <Select {...field} id="role" placeholder="Selecciona el rol">
                  <option value="Administrador">Administrador</option>
                  <option value="Usuario">Usuario</option>
                </Select>
                <FormErrorMessage>{form.errors.role}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="profile_image">
            {({ field, form }) => (
              <FormControl
                id="profile_image"
                isInvalid={
                  form.errors.profile_image && form.touched.profile_image
                }
              >
                <FormLabel>Foto de perfil</FormLabel>
                <input
                  id="profile_image"
                  name="profile_image"
                  type="file"
                  onChange={(event) => {
                    const files = event.target.files;
                    let myFiles = Array.from(files);
                    form.setFieldValue("profile_image", myFiles[0]);
                  }}
                />
                <FormErrorMessage>{form.errors.profile_image}</FormErrorMessage>
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
                  placeholder={user ? user.password : "password"}
                />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button mt={4} colorScheme="teal" type="submit">
            {user ? "Guardar" : "Crear"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
