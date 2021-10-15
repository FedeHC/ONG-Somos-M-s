import React from "react";
import {
  VStack,
  Container,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";

const obj = !!Math.round(Math.random() * 1) && {
  name: "Nombre de prueba",
  description: "Descripción de prueba",
  image: undefined,
  id: 1,
};

export const FormActivities = () => {
  const url = obj ? REACT_APP_ACTIVITIES + obj.id : REACT_APP_ACTIVITIES_CREATE;

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required("El nombre es obligatorio")
      .min(3, "Se requieren 3 caracteres como mínimo"),
    image: Yup.mixed()
      .required("La imagen es obligatoria")
      .test(
        "type",
        "Formato de imagen incorrecto. Solo acepta archivos .png y .jpg",
        (file) => {
          return (
            file && (file.type === "image/png" || file.type === "image/jpg")
          );
        }
      ),
  });

  return (
    <VStack mt="2rem">
      <Container maxW="container.md">
        <Formik
          initialValues={{
            name: obj ? obj.name : "",
            description: obj ? obj.description : "",
            image: undefined,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
            fetch(url, {
              method: obj ? "PATCH" : "POST",
              body: JSON.stringify(values),
            })
              .then((response) => response.json())
              .then((result) => console.log(result))
              .catch((error) =>
                console.log(`Fallo el ${obj ? `PATCH` : `POST`}`)
              );
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    isRequired
                  >
                    <FormLabel htmlFor="name">Nombre</FormLabel>
                    <Input
                      {...field}
                      id="name"
                      placeholder="Nombre de actividad"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <FormControl mt="1rem">
                <FormLabel htmlFor="name">Descripción:</FormLabel>
                <CKEditor
                  editor={ClassicEditor}
                  data={`<p>${obj ? obj.description : ""}</p>`}
                  onReady={(editor) => {}}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </FormControl>

              <Field name="image">
                {({ form }) => (
                  <FormControl
                    mt="1rem"
                    id="image"
                    isInvalid={form.errors.image && form.touched.image}
                    isRequired
                  >
                    <FormLabel>Imagen</FormLabel>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/png, image/jpg"
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

              <Button mt="1rem" colorScheme="teal" type="submit">
                Guardar
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </VStack>
  );
};
