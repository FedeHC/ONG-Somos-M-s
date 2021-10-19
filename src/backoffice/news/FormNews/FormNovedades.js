import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Center, Heading,
         FormControl, FormErrorMessage, FormLabel,
         Input, Button, Select } from "@chakra-ui/react";
import { getNews, createNews, updateNews } from "../../../services/apiNews";


// SCHEMA
const formSchema = Yup.object().shape({
  name: Yup.string().required("Requerido").min(4, "Se requieren 4 caracteres como mínimo"),
  content: Yup.string().required("Requerido"),
  category: Yup.string().required("Requerido"),
  image: Yup.string().required("Requerido"),
});

const FormNovedades = () => {
  const [response, setResponse] = useState([]);
  const { id } = useParams();   // Get id if exists in URL, otherwise null/undefined.

  // NEWS ARRAY/OBJECT
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNews(id);
      setResponse(result.data.data);
    }  
    fetchData();
    }, [id]);

  // INITIAL FORMIK VALUES
  const initialValues = {
    name: response?.name || "",
    content: response?.content || "",
    category: response?.category || "",
    image: response?.image || "",
  };

  return (
    <Center>
      {/* FORM */}
      <Formik initialValues={initialValues}
              enableReinitialize
              validationSchema={formSchema}
              onSubmit={(values) => id ? updateNews(values, id) : createNews(values)} >
        {(formik) => (
          <Form>
            {/* TITLE */}
            <Heading m={4}>Formulario Novedades</Heading>

            {/* NAME INPUT */}
            <Field mt={5}
                   className="input"
                   name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Titulo</FormLabel>
                  <Input {...field}
                         placeholder="Nombre" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* CONTENT INPUT */}
            <Field mt={5}
                   className="input"
                   name="content">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.content && form.touched.content} >
                  <FormLabel htmlFor="content">Contenido</FormLabel>
                  <CKEditor editor={ClassicEditor}
                            data={formik.values.content}
                            onChange={(e, editor) => {
                              const data = editor.getData();
                              formik.setFieldValue("content", data);
                            }} />
                  <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* CATEGORY SELECT/INPUT */}
            <Field mt={5}
                   className="input"
                   name="category">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.category && form.touched.category} >
                  <FormLabel htmlFor="category">Categoría</FormLabel>
                    {/* If not id in url, show select input with categories */}
                    {!id 
                      ? <Select placeholder="Elija una categoría" {...field}>
                          {response.map((res) => (
                            <option key={res.id}>{res.category_id}</option>
                          ))}
                        </Select>
                      /* If id in url, show input with current id category (if exists) */
                      : <Input {...field}
                               placeholder="ID de categoria" />
                    }
                  <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* IMAGE INPUT */}
            <Field mt={5}
                   className="input"
                   name="image">
              {({ form }) => (
                <FormControl isInvalid={form.errors.image && form.touched.image} >
                  <FormLabel htmlFor="image">Imagen</FormLabel>
                  <Input id="image"
                         type="file"
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
            <Button mt={4}
                    width="100%"
                    colorScheme="teal"
                    type="submit">Enviar</Button>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default FormNovedades;
