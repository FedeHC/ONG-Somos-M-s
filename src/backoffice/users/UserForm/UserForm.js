import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Center, Heading, Box, Container,
         FormControl, FormErrorMessage, FormLabel,
         Input, Button, Select } from "@chakra-ui/react";
import { getUsers, createUser, updateUser, deleteUser } from "../../../services/apiUsers";


const UserForm = () => {
  // STATE
  const [response, setResponse] = useState([]);

  // ID & URL
  const { id } = useParams();   // Get id if exists in URL, otherwise null/undefined.
  const location = useLocation().pathname.toLocaleLowerCase();

  // USERS ARRAY/OBJECT
  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers(id);
      setResponse(result.data?.data);
    }  
    fetchData();
    }, [id]);
  
  // HANDLER
  const submitHandler = (values) => {
    if(location.includes("create"))
      createUser(values);
    else if(location.includes("edit"))
      updateUser(values, id)
    else if(location.includes("delete"))
      deleteUser(values, id)
    else
      return;
  };

  // SCHEMA
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Requerido").min(4, "Se requieren 4 caracteres como mínimo"),
    email: Yup.string().required("Requerido").email("Email inválido"),
    role: Yup.string().required("Requerido"),
    profile_image: Yup.mixed().required("Requerido")
                      .test("type",
                      "Formato de imagen incorrecto. Solo acepta archivos .png, .jpg o .jpeg",
                      (file) => {
                        return (file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg"));}),
    password: Yup.string().required("Requerido").min(8, "Se requieren 8 caracteres como mínimo"),
  });
  
  // INITIAL FORMIK VALUES
  const initialValues = {
    name: response?.name || "",
    email: response?.email || "",
    role: response?.role || "",
    profile_image: response?.profile_image || "",
    password: response?.password || "",
  };

  return (
    <Center>
      {/* FORMIK */}
      <Formik initialValues={initialValues}
              enableReinitialize
              validationSchema={formSchema}
              onSubmit={(values) => submitHandler(values)}>
        {(formik) => (
          // FORM
          <Form>
            <Container>
              <Box width="xl"
                   mt={20}
                   mb={20}
                   p={10}
                   borderRadius={10}
                   boxShadow="dark-lg">

                {/* TITLE */}
                <Center bg="#00214d"
                        mt={0}
                        mb={10}
                        p={3}
                        borderRadius={10}>
                  <Heading size="xl"
                          color="white">{id ? "Editando" : "Creando"} Usuario</Heading>
                </Center>

                {/* NAME INPUT */}
                <Field name="name"
                       mt={5}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}
                                mb={5}>
                      <FormLabel htmlFor="name">Nombre:</FormLabel>
                      <Input {...field}
                            variant="flushed" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* EMAIL INPUT */}
                <Field name="email"
                       mt={5}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}
                                 mb={5}>
                      <FormLabel htmlFor="email">Email:</FormLabel>
                      <Input {...field}
                             variant="flushed" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* ROLE INPUT */}
                <Field name="role"
                       mt={5}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.role && form.touched.role}
                                 mb={5}>
                      <FormLabel htmlFor="role">Rol:</FormLabel>
                        <Select {...field}
                                placeholder="-Seleccione rol-">
                              <option value="Usuario">Usuario</option>
                              <option value="Administrador">Administrador</option>
                         </Select>
                      <FormErrorMessage>{form.errors.role}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* PROFILE IMAGE INPUT */}
                <Field name="profile_image"
                      mt={5}>
                  {({ form }) => (
                    <FormControl isInvalid={form.errors.profile_image && form.touched.profile_image}
                                mb={5}>
                      <FormLabel htmlFor="profile_image">Imagen:</FormLabel>
                      <Input id="image"
                            type="file"
                            variant="flushed"
                            onChange={(event) => {
                              const files = event.target.files;
                              let myFiles = Array.from(files);
                              formik.setFieldValue("profile_image", myFiles[0]);
                            }} />
                      <FormErrorMessage>{form.errors.profile_image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* PASSWORD INPUT */}
                <Field name="password"
                       mt={5}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}
                                 mb={5}>
                      <FormLabel htmlFor="password">Contraseña:</FormLabel>
                      <Input {...field}
                             type="password"
                             variant="flushed" />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* SEND BUTTON */}
                <Button mt={5}
                        mb={10}
                        width="100%"
                        colorScheme="blue"
                        bg="#00214d"
                        type="submit">Enviar</Button>
              </Box>
            </Container>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default UserForm;
