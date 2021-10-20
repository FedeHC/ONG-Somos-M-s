import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Container, VStack,
         FormLabel, Input, Textarea, Button, Center } from "@chakra-ui/react";
import { showOrg, editOrg } from "../../../services/apiOrganization";


// Max. file size for input file upload:
const MAX_FILE_SIZE = 10485760; // 10 MB.

function OrgForm() {
  const [orgData, setOrgData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await showOrg();
        setOrgData(response.data.data);
      }
      catch(error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // INITIAL FORM VALUES
  const initialValues = {
    name: orgData?.name || "",
    logo: orgData?.logo || "",
    short_description: orgData?.short_description || "",
    long_description: orgData?.long_description || "",
    facebook_url: orgData?.facebook_url || "",
    linkedin_url: orgData?.linkedin_url || "",
    instagram_url: orgData?.instagram_url || "",
    twitter_url: orgData?.twitter_url || ""
  };

  // YUP SCHEMA:
  const schema = yup.object().shape({
    name: yup.string().required("Campo requerido."),
    logo: yup.mixed()
             .required("Campo requerido.")
             .test("type", "Solo se aceptan los sig. formatos de imágen: jpeg, jpg y png",
                   (file) => file && (file.type === "image/jpeg" ||
                                      file.type === "image/jpg" ||
                                      file.type === "image/png"))
             .test("fileSize", "El archivo es mayor a 10 MB",
                   (file) => file && file.size <= MAX_FILE_SIZE),
    short_description: yup.string().required("Campo requerido."),
    long_description: yup.string().required("Campo requerido."),
    facebook_url: yup.string().url("Debe contener una URL válida. Ejemplo: https://www.facebook.com/organizacion"),
    linkedin_url: yup.string().url("Debe contener una URL válida. Ejemplo: https://www.linkedin.com/in/organizacion"),
    instagram_url: yup.string().url("Debe contener una URL válida. Ejemplo: https://www.instagram.com/organizacion"),
    twitter_url: yup.string().url("Debe contener una URL válida. Ejemplo: https://twitter.com/organizacion")
  });

  return (
      <Container maxW="md" textAlign="left">
        <VStack spacing={30}
                columns={1}
                my={10}>
          <Formik initialValues={initialValues}
                  validationSchema={schema}
                  enableReinitialize
                  onSubmit={(values) => editOrg(values)} >
            {(formik) => {
              return (
                <Form>
                  {/* NAME */}
                  <FormLabel name="name">Nombre:</FormLabel>
                  <Input id="name"
                         type="text"
                         {...formik.getFieldProps('name')} />
                  <ErrorMessage name="name">
                    {(msg) => <div style={{ color: "lightcoral" }}>{msg}</div>}
                  </ErrorMessage>

                  {/* LOGO */}
                  <FormLabel name="logo"
                             mt={5}>Logo: </FormLabel>                  
                  <input id="logo"
                         name="logo"
                         type="file"
                         onChange={(event) => {
                           const files = event.target.files;
                           let myFiles = Array.from(files);
                           formik.setFieldValue("logo", myFiles[0]);
                         }} />

                  <ErrorMessage name="logo">
                    {(msg) => <div style={{ color: "lightcoral" }}>{msg}</div>}
                  </ErrorMessage>

                  {/* SHORT_DESCRIPTION */}
                  <FormLabel name="short_description"
                             mt={5}>Descripción corta: </FormLabel>
                  <CKEditor editor={ClassicEditor}
                            id="short_description"
                            name="short_description"
                            data={initialValues.short_description}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              formik.setFieldValue("short_description", data)
                            }} />
                  <ErrorMessage name="short_description">
                    {(msg) => <div style={{ color: "lightcoral" }}>{msg}</div>}
                  </ErrorMessage>

                  {/* LONG_DESCRIPTION */}
                  <FormLabel name="long_description"
                             mt={5}>Descripción larga:</FormLabel>
                  <Textarea id="long_description"
                            rows={10}
                            type="text"
                            {...formik.getFieldProps('long_description')} />
                  <ErrorMessage name="long_description">
                    {(msg) => <div style={{ color: "lightcoral" }}>{msg}</div>}
                  </ErrorMessage>

                  {/* FACEBOOK */}
                  <FormLabel name="facebook_url"
                             mt={5}>Facebook:</FormLabel>
                  <Input id="facebook_url"
                         type="text"
                         {...formik.getFieldProps('facebook_url')} />
                  <ErrorMessage name="facebook_url">
                    {(msg) => <div style={{ color: "lightcoral" }}>{msg}</div>}
                  </ErrorMessage>

                  {/* LINKEDIN */}
                  <FormLabel name="linkedin_url"
                             mt={5}>LinkedIn:</FormLabel>
                  <Input id="linkedin_url"
                         type="text"
                         {...formik.getFieldProps('linkedin_url')} />
                  <ErrorMessage name="linkedin_url">
                    {(msg) => <div style={{ color: "lightcoral" }}>{msg}</div>}
                  </ErrorMessage>

                  {/* INSTAGRAM */}
                  <FormLabel name="instagram_url"
                             mt={5}>Instagram:</FormLabel>
                  <Input id="instagram_url"
                         type="text"
                         {...formik.getFieldProps('instagram_url')} />
                  <ErrorMessage name="instagram_url">
                    {(msg) => <div style={{ color: "lightcoral" }}>{msg}</div>}
                  </ErrorMessage>
                  
                  {/* TWITTER */}
                  <FormLabel name="twitter_url"
                             mt={5}>Twitter:</FormLabel>
                  <Input id="twitter_url"
                         type="text"
                         {...formik.getFieldProps('twitter_url')} />
                  <ErrorMessage name="twitter_url">
                    {(msg) => <div style={{ color: "lightcoral" }}>{msg}</div>}
                  </ErrorMessage>

                  {/* SUBMIT */}
                  <Center>
                    <Button colorScheme="blue"
                            mt={5}
                            type="submit">Editar</Button>
                  </Center>
                </Form>
              );
            }}
          </Formik>
        </VStack>
      </Container>
  );
}

export default OrgForm;
