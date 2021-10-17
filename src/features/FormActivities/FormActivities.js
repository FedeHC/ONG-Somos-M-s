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
import { /* showActivities, */ createActivity, updateActivity } from "../../services/apiActivities";


const obj = null;
/*
const obj = !!Math.round(Math.random() * 1) && {
  name: "Nombre de prueba",
  description: "Descripción de prueba",
  image: undefined,
  id: 1,
};
*/

const FormActivities = () => {
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
            file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")
          );
        }
      ),
  });

  return (
    <VStack mt="2rem">
      <Container maxW="container.md">
        <Formik
          initialValues={{
            name: "",
            description: "",
            image: undefined,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            obj ? updateActivity(obj.current, obj.current.id) : createActivity(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <>
                    <FormControl isInvalid={form.errors.name && form.touched.name} >
                      <FormLabel htmlFor="name">Nombre</FormLabel>
                      <Input
                        {...field}
                        id="name"
                        placeholder="Nombre de actividad"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl mt="1rem">
                      <FormLabel htmlFor="name">Descripción:</FormLabel>
                      <CKEditor
                        editor={ClassicEditor}
                        data={`<p>${obj ? obj.description : ""}</p>`}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          form.setFieldValue("description", data);
                        }}
                    />
                  </FormControl>
                </>
                )}
              </Field>

              <Field name="image">
                {({ form }) => (
                  <FormControl
                    mt="1rem"
                    id="image"
                    isInvalid={form.errors.image && form.touched.image}
                  >
                    <FormLabel>Imagen</FormLabel>
                    <input
                      id="image"
                      name="image"
                      type="file"
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

export default FormActivities;
