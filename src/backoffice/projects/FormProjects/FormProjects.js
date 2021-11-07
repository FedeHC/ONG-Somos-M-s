import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Center, Box, Heading, Container,
         FormControl, FormLabel, FormErrorMessage,
         Input, Button} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import { getProjects, createProject, updateProject, deleteProject } from "../../../services/apiProjects";


export const FormProjects = () => {
  // STATE
  const [response, setResponse] = useState([]);

  // ID & URL
  const { id } = useParams();   // Get id if exists in URL, otherwise null/undefined.
  const location = useLocation().pathname.toLocaleLowerCase();

  // DATES:
  const today = new Date();
  var yesterday = new Date(today.setDate(today.getDate() - 1));

  // PROJECTS ARRAY/OBJECT
  useEffect(() => {
    const fetchData = async () => {
      const result = await getProjects(id);
      setResponse(result.data?.data);
    }  
    fetchData();
  }, [id]);

  // HANDLER
  const submitHandler = (values) => {
    if(location.includes("create"))
      createProject(values);
    else if(location.includes("edit"))
      updateProject(values, id)
    else if(location.includes("delete"))
      deleteProject(values, id)
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
    title: Yup.string().required("Requerido").min(3, "Se requieren 3 caracteres como mínimo"),
    description: Yup.string().required("Requerido").min(3, "Se requieren 3 caracteres como mínimo"),
    image: Yup.mixed().required("Requerido")
              .test("type",
              "Formato de imagen incorrecto. Solo acepta archivos .png, .jpg o .jpeg",
              (file) => {
                return (file && (file.type === "image/png" ||
                                  file.type === "image/jpg" ||
                                  file.type === "image/jpeg"));}),
    due_date: Yup.date().min(yesterday,
                             `La fecha de finalización no pueder ser anterior a ${today.toLocaleDateString()}`)
                        .nullable().default(null),
  });

  // INITIAL FORMIK VALUES
  const initialValues = {
    title: response?.title || "",
    description: response?.description || "",
    image: response?.image || "",
    due_date: response?.due_date || ""
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
                          color="white">{formTitle()} Projecto</Heading>
                </Center>

                {/* TITLE INPUT */}
                <Field name="title">
                  {({ field, form }) => (
                    <>
                      <FormControl isInvalid={form.errors.title && form.touched.title}
                                   mb={5}>
                        <FormLabel htmlFor="title">Título:</FormLabel>
                        <Input {...field}
                               variant="flushed" />
                        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                      </FormControl>
                    </>
                  )}
                </Field>

                {/* DESCRIPTION INPUT */}
                <Field name="description"
                      mt={5}>
                  {({ form }) =>
                    <FormControl isInvalid={form.errors.description && form.touched.description} 
                                mb={5}>
                      <FormLabel htmlFor="description">Descripción:</FormLabel>
                      <CKEditor editor={ClassicEditor}
                                data={formik.values.description}
                                onChange={(event, editor) => {
                                  const data = editor.getData();
                                  formik.setFieldValue("description", data);
                                }} />
                      <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>

                {/* IMAGE INPUT */}
                <Field name="image">
                  {({ form }) => (
                    <FormControl isInvalid={form.errors.image && form.touched.image}
                                mb={5}>
                      <FormLabel>Imagen:</FormLabel>
                      <Input id="image"
                            type="file"
                            variant="flushed"
                            onChange={(event) => {
                              const files = event.target.files;
                              let myFiles = Array.from(files);
                              form.setFieldValue("image", myFiles[0]);
                            }} />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* DUE DATE INPUT */}
                <Field name="due_date">
                  {({ field, form }) => (
                    <>
                      <FormControl isInvalid={form.errors.due_date && form.touched.due_date}
                                   mb={5}>
                        <FormLabel htmlFor="due_date">Fecha finalización:</FormLabel>
                        <Input {...field}
                               type="date"
                               variant="flushed" />
                        <FormErrorMessage>{form.errors.due_date}</FormErrorMessage>
                      </FormControl>
                    </>
                  )}
                </Field>

                {/* SEND BUTTON */}
                <Button mt={4}
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
