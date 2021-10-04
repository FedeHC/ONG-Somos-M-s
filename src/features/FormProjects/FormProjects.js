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
import * as Yup from "yup";

const obj = !!Math.round(Math.random() * 1) && {
  title: "Título de prueba",
  description: "Descripción de prueba",
  image: undefined,
  due_date: new Date().toISOString().substr(0, 10),
  id: 1,
};

export const FormProjects = () => {
  const today = new Date();

  var yesterday = new Date(today.setDate(today.getDate() - 1));

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .required("El título es obligatorio")
      .min(3, "Se requieren 3 caracteres como mínimo"),
    description: Yup.string()
      .required("La descripción es obligatoria")
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
    due_date: Yup.date()
      .min(
        yesterday,
        `La fecha de finalización no pueder ser anterior a ${today.toLocaleDateString()}`
      )
      .nullable()
      .default(null),
  });

  return (
    <VStack mt="2rem">
      <Container maxW="container.md">
        <Formik
          initialValues={{
            title: obj ? obj.title : "",
            description: obj ? obj.description : "",
            image: undefined,
            due_date: obj ? obj.due_date : null,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="title">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.title && form.touched.title}
                    isRequired
                  >
                    <FormLabel htmlFor="title">Título</FormLabel>
                    <Input
                      {...field}
                      id="title"
                      placeholder="Título del proyecto"
                    />
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="description">
                {({ field, form }) => (
                  <FormControl
                    mt="1rem"
                    isInvalid={
                      form.errors.description && form.touched.description
                    }
                    isRequired
                  >
                    <FormLabel htmlFor="title">Descripción</FormLabel>
                    <Input
                      {...field}
                      id="description"
                      placeholder="Descripción del proyecto"
                    />
                    <FormErrorMessage>
                      {form.errors.description}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

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

              <Field id="due_date" name="due_date">
                {({ form, field }) => (
                  <FormControl
                    mt="1rem"
                    id="due_date"
                    defaultValue="01/01/2021"
                    isInvalid={form.errors.due_date && form.touched.due_date}
                  >
                    <FormLabel>Fecha de Finalización</FormLabel>
                    <Input {...field} id="due_date" type="date" />
                    <FormErrorMessage>{form.errors.due_date}</FormErrorMessage>
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
