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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./FormActivities.css";
import { Formik, Form, Field } from "formik";

const obj = !!Math.round(Math.random() * 1) && {
  name: "Actividad de prueba",
  description: "Descripción de prueba",
  file: undefined,
  id: 1,
};

export const FormActivities = () => {
  function validateName(value) {
    let error;
    if (!value) {
      error = "El nombre es requerido";
    } else if (value.length < 3) {
      error = "El nombre deber contener al menos 3 caracteres";
    }
    return error;
  }

  function validateFile(value) {
    let error;
    if (!value) {
      error = "La imagen es requerida";
    }
    return error;
  }

  return (
    <VStack mt="2rem">
      <Container maxW="container.md" className="editFormCreationActivities">
        <Formik
          initialValues={{
            name: obj ? obj.name : "",
            file: obj ? obj.file : undefined,
          }}
          onSubmit={(values, actions) => {
            fetch(obj ? `/activities/:${obj.id}` : "/activities/create", {
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
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    mb="1rem"
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

              <Field name="file" validate={validateFile}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    mt="1rem"
                    mb="1rem"
                    isRequired
                  >
                    <FormLabel htmlFor="file">Imagen</FormLabel>
                    <Field
                      name="file"
                      type="file"
                      accept="image/png,image/jpg"
                    />
                    <FormErrorMessage>{form.errors.file}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                mt="1rem"
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Guardar
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </VStack>
  );
};
