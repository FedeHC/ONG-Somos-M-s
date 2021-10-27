import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Center, Heading, Box, Container,
         FormControl, FormErrorMessage, FormLabel,
         Input, Button, Select } from "@chakra-ui/react";
import { getNews, createNews, updateNews, deleteNews } from "../../../services/apiNews";


const FormNovedades = () => {
  // STATE
  const [response, setResponse] = useState([]);

  // ID & URL
  const { id } = useParams();   // Get id if exists in URL, otherwise null/undefined.
  const location = useLocation().pathname.toLocaleLowerCase();

  // NEWS ARRAY/OBJECT
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNews(id);
      setResponse(result.data?.data);
    }  
    fetchData();
    }, [id]);

  // HANDLER
  const submitHandler = (values) => {
    if(location.includes("create"))
      createNews(values);
    else if(location.includes("edit"))
      updateNews(values, id)
    else if(location.includes("delete"))
      deleteNews(values, id)
    else
      return;
  };

  // FORM TITLE
  const formTitle = () => {
    if(location.includes("create"))
      return "Creando";
    else if(location.includes("edit"))
      return "Editando";
    else if(location.includes("delete"))
      return "Borrando";
    else
      return "";
  };

  // SCHEMA
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Requerido").min(4, "Se requieren 4 caracteres como mínimo"),
    content: Yup.string().required("Requerido"),
    category: Yup.string().required("Requerido"),
    image: Yup.mixed().required("Requerido")
                       .test("type",
                             "Formato de imagen incorrecto. Solo acepta archivos .png, .jpg o .jpeg",
                             (file) => {
                               return (file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg"));})
  });

  // INITIAL FORMIK VALUES
  const initialValues = {
    name: response?.name || "",
    content: response?.content || "",
    category: response?.category || "",
    image: response?.image || "",
  };

  return (
    <Center>
      {/* FORMIK */}
      <Formik initialValues={initialValues}
              enableReinitialize
              validationSchema={formSchema}
              onSubmit={(values) => submitHandler(values)} >
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
                          color="white">{formTitle()} Novedad</Heading>
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

                {/* CONTENT INPUT */}
                <Field name="content"
                      mt={5}>
                  {({ form }) =>
                    <FormControl isInvalid={form.errors.content && form.touched.content}
                                mb={5}>
                      <FormLabel htmlFor="content">Contenido:</FormLabel>
                      <CKEditor editor={ClassicEditor}
                                data={formik.values.content}
                                onChange={(event, editor) => {
                                  const data = editor.getData();
                                  formik.setFieldValue("content", data);
                                }} />
                      <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>

                {/* CATEGORY SELECT/INPUT */}
                <Field name="category"
                      mt={5}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.category && form.touched.category}
                                mb={5}>
                      <FormLabel htmlFor="category">Categoría:</FormLabel>
                        {/* If not id in url, show select input with categories */}
                        {!id 
                          ? <Select placeholder="-Seleccione categoría-" {...field}>
                              {response.map((res) => (
                                <option key={res.id}>{res.category_id}</option>
                              ))}
                            </Select>
                          /* If id in url, show input with current id category (if exists) */
                          : <Input {...field}
                                  variant="flushed"
                                  placeholder="ID de categoria" />
                        }
                      <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* IMAGE INPUT */}
                <Field name="image"
                      mt={5}>
                  {({ form }) => (
                    <FormControl isInvalid={form.errors.image && form.touched.image}
                                mb={5}>
                      <FormLabel htmlFor="image">Imagen:</FormLabel>
                      <Input id="image"
                            type="file"
                            variant="flushed"
                            onChange={(event) => {
                              const files = event.target.files;
                              let myFiles = Array.from(files);
                              formik.setFieldValue("image", myFiles[0]);
                            }} />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
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

export default FormNovedades;
