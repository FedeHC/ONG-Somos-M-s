import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Center, Box, Heading, Container,
         FormControl, FormLabel, FormErrorMessage,
         Input, Button} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import { getCategories} from "../../services/apiCategories";
import { useDispatch } from "react-redux";
import { getBase64FomFile } from "../../helper/convertImage";
import { postCategorias, putCategorias } from "../../app/categorias/categoriasReducer";
import { successAlert } from "../../features/alert/alert";


const CategoriesForm = ({history}) => {
  const dispatch = useDispatch();
  // STATE
  const [response, setResponse] = useState([]);
  const [imgSv, setImgSv] = useState("");

  // ID & URL
  const { id } = useParams();   // Get id if exists in URL, otherwise null/undefined.
  const location = useLocation().pathname.toLocaleLowerCase();

  // CATEGORIES ARRAY/OBJECT
  useEffect(() => {
    const fetchData = async () => {
      const result = await getCategories(id);
      setResponse(result.data?.data);
    }  
    fetchData();
    }, [id]);

  // HANDLER
  const submitHandler = (values) => {
    if (location.includes('create')) {
      values.image = imgSv;
      dispatch(postCategorias(values))
      successAlert();
    } else if (location.includes('edit')) {
      values.image = imgSv;
      dispatch(putCategorias({values, id}));
      successAlert();
    }
    history.push("/backoffice/categories");
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
    name: Yup.string().required("Requerido").min(3, "Se requieren 3 caracteres como mínimo"),
    description: Yup.string().required("Requerido"),
  });

  // INITIAL FORMIK VALUES
  const initialValues = {
    name: response?.name || "",
    description: response?.description || "",
    image: response?.image || "",
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
                          color="white">{formTitle()} categoría</Heading>
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
                              getBase64FomFile(myFiles[0], function(base64){
                              setImgSv(base64);
                              });
                            }} />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
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

export default CategoriesForm;
