import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Center, Box, Heading, Container,
         FormControl, FormLabel, FormErrorMessage,
         Input, Button} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import { getMembers, createMember, updateMember, deleteMember } from '../../../services/apiMembers';


const regMatch = /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w?[a-zA-Z-_%/@?]+)*([^/\w?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

const MemberForm = () => {
  // STATE
  const [response, setResponse] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  // const [imgIncomming, setImgIncomming] = useState();

  // ID & URL
  const { id } = useParams();   // Get id if exists in URL, otherwise null/undefined.
  const location = useLocation().pathname.toLocaleLowerCase();

  // MEMBERS ARRAY/OBJECT
  useEffect(() => {
    const fetchData = async () => {
      const result = await getMembers(id);
      setResponse(result.data?.data);
    }  
    fetchData();
    }, [id]);

  // HANDLER
  const submitHandler = (values) => {
    if(location.includes("create"))
      createMember(values);
    else if(location.includes("edit"))
      updateMember(values, id)
    else if(location.includes("delete"))
      deleteMember(values, id)
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
    name: Yup.string().required('Requerido').min(4, 'Se requieren 4 caracteres como mínimo'),
    description: Yup.string().required('Requerido'),
    image: Yup.mixed().required('Requerido')
                      .test("type",
                      "Formato de imagen incorrecto. Solo acepta archivos .png, .jpg o .jpeg",
                      (file) => {
                        return (file && (file.type === "image/png" ||
                                          file.type === "image/jpg" ||
                                          file.type === "image/jpeg"));}),
    social: Yup.string().required('Requerido').matches(regMatch, 'Debe ingresar URL válida'),
    social2: Yup.string().required('Requerido').matches(regMatch, 'Debe ingresar URL válida'),
  });

  // INITIAL FORMIK VALUES
  const initialValues = {
    name: response?.name || "",
    description: response?.description || "",
    image: response?.image || "",
    facebookUrl: response?.facebookUrl || "",
    linkedinUrl: response?.linkedinUrl || ""
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
                          color="white">{formTitle()} Miembro</Heading>
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
                              setSelectedFile(myFiles[0]);
                            }} />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {selectedFile &&  <img src={URL.createObjectURL(selectedFile)} alt="Imagen del archivo" /> }
                {!selectedFile && <img src={response?.image} alt="Imagen del archivo" /> }

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

                {/* FACEBOOK INPUT */}
                <Field name="facebookUrl">
                  {({ field, form }) => (
                    <>
                      <FormControl isInvalid={form.errors.facebookUrl && form.touched.facebookUrl}
                                   mb={5}>
                        <FormLabel htmlFor="facebookUrl">Facebook:</FormLabel>
                        <Input {...field}
                               variant="flushed" />
                        <FormErrorMessage>{form.errors.facebookUrl}</FormErrorMessage>
                      </FormControl>
                    </>
                  )}
                </Field>

                {/* LINKEDIN INPUT */}
                <Field name="linkedinUrl">
                  {({ field, form }) => (
                    <>
                      <FormControl isInvalid={form.errors.linkedinUrl && form.touched.linkedinUrl}
                                   mb={5}>
                        <FormLabel htmlFor="linkedinUrl">LinkedIn:</FormLabel>
                        <Input {...field}
                               variant="flushed" />
                        <FormErrorMessage>{form.errors.linkedinUrl}</FormErrorMessage>
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

export default MemberForm;
