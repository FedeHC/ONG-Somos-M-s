import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Center, Box, Heading, Container,
         FormControl, FormLabel, FormErrorMessage,
         Input, Textarea, Button} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import { showOrg, editOrg } from "../../../services/apiOrganization";


function OrgForm() {
  // STATE
  const [respose, setResponse] = useState(null);

  // URL
  const location = useLocation().pathname.toLocaleLowerCase();

  // ORGANIZATION ARRAY/OBJECT
  useEffect(() => {
    const fetchData = async () => {
      const result = await showOrg();
      setResponse(result.data?.data);
    }  
    fetchData();
    }, []);

  // HANDLER
  const submitHandler = (values) => {
    if(location.includes("edit"))
      editOrg(values)
    else
      return;
  };

  // SCHEMA:
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Requerido"),
    logo: Yup.mixed().required("Requerido")
             .test("type",
                   "Formato de imagen incorrecto. Solo acepta archivos .png, .jpg o .jpeg",
                   (file) => {
                    return (file && (file.type === "image/png" ||
                                     file.type === "image/jpg" ||
                                     file.type === "image/jpeg"));}),
    short_description: Yup.string().required("Requerido"),
    long_description: Yup.string().required("Requerido"),
    facebook_url: Yup.string().url("Debe contener una URL válida. Ejemplo: https://www.facebook.com/organizacion"),
    linkedin_url: Yup.string().url("Debe contener una URL válida. Ejemplo: https://www.linkedin.com/in/organizacion"),
    instagram_url: Yup.string().url("Debe contener una URL válida. Ejemplo: https://www.instagram.com/organizacion"),
    twitter_url: Yup.string().url("Debe contener una URL válida. Ejemplo: https://twitter.com/organizacion")
  });

  // INITIAL FORMIK VALUES
  const initialValues = {
    name: respose?.name || "",
    logo: respose?.logo || "",
    short_description: respose?.short_description || "",
    long_description: respose?.long_description || "",
    facebook_url: respose?.facebook_url || "",
    linkedin_url: respose?.linkedin_url || "",
    instagram_url: respose?.instagram_url || "",
    twitter_url: respose?.twitter_url || ""
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
                        color="white">Editando Organización</Heading>
              </Center>

              {/* NAME INPUT */}
              <Field name="name">
                {({ field, form }) => (
                  <>
                    <FormControl isInvalid={form.errors.name && form.touched.name}
                                mb={5}>
                      <FormLabel htmlFor="name">Nombre:</FormLabel>
                      <Input {...field}
                            variant="flushed" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </Field>

              {/* LOGO INPUT */}
              <Field name="logo">
                {({ form }) => (
                  <FormControl isInvalid={form.errors.logo && form.touched.logo}
                              mb={5}>
                    <FormLabel>Imagen:</FormLabel>
                    <Input id="logo"
                          type="file"
                          variant="flushed"
                          onChange={(event) => {
                            const files = event.target.files;
                            let myFiles = Array.from(files);
                            form.setFieldValue("logo", myFiles[0]);
                          }} />
                    <FormErrorMessage>{form.errors.logo}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* SHORT DESCRIPTION INPUT */}
              <Field name="short_description"
                    mt={5}>
                {({ form }) =>
                  <FormControl isInvalid={form.errors.short_description && form.touched.short_description} 
                              mb={5}>
                    <FormLabel htmlFor="short_description">Descripción corta:</FormLabel>
                    <CKEditor editor={ClassicEditor}
                              data={formik.values.short_description}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                formik.setFieldValue("short_description", data);
                              }} />
                    <FormErrorMessage>{form.errors.short_description}</FormErrorMessage>
                  </FormControl>
                }
              </Field>

              {/* LONG DESCRIPTION INPUT */}
              <Field name="long_description">
                {({ field, form }) => (
                  <>
                    <FormControl isInvalid={form.errors.long_description && form.touched.long_description}
                                mb={5}>
                      <FormLabel htmlFor="long_description">Descripción larga:</FormLabel>
                      <Textarea {...field}
                                rows={10}
                                variant="flushed" />
                      <FormErrorMessage>{form.errors.long_description}</FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </Field>

              {/* FACEBOOK INPUT */}
              <Field name="facebook_url">
                {({ field, form }) => (
                  <>
                    <FormControl isInvalid={form.errors.facebook_url && form.touched.facebook_url}
                                mb={5}>
                      <FormLabel htmlFor="facebook_url">Facebook:</FormLabel>
                      <Input {...field}
                            variant="flushed" />
                      <FormErrorMessage>{form.errors.facebook_url}</FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </Field>

              {/* LINKEDIN INPUT */}
              <Field name="linkedin_url">
                {({ field, form }) => (
                  <>
                    <FormControl isInvalid={form.errors.linkedin_url && form.touched.linkedin_url}
                                mb={5}>
                      <FormLabel htmlFor="linkedin_url">Linkedin:</FormLabel>
                      <Input {...field}
                            variant="flushed" />
                      <FormErrorMessage>{form.errors.linkedin_url}</FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </Field>

              {/* INSTAGRAM INPUT */}
              <Field name="instagram_url">
                {({ field, form }) => (
                  <>
                    <FormControl isInvalid={form.errors.instagram_url && form.touched.instagram_url}
                                mb={5}>
                      <FormLabel htmlFor="instagram_url">Instagram:</FormLabel>
                      <Input {...field}
                            variant="flushed" />
                      <FormErrorMessage>{form.errors.instagram_url}</FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </Field>

              {/* TWITTER INPUT */}
              <Field name="twitter_url">
                {({ field, form }) => (
                  <>
                    <FormControl isInvalid={form.errors.twitter_url && form.touched.twitter_url}
                                mb={5}>
                      <FormLabel htmlFor="twitter_url">Twitter:</FormLabel>
                      <Input {...field}
                            variant="flushed" />
                      <FormErrorMessage>{form.errors.twitter_url}</FormErrorMessage>
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
}

export default OrgForm;
