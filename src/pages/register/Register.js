import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import { signupSchema, mostrarErrorTyc } from "../../config/signupSchema";
import PopUp from "../../features/pdfReader/PopUp";

import styles from "./register.module.css";

export const Register = () => {
  const [aceptarTerminos, setaceptarTerminos] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.register__container}>
        <p className={styles.formTitle}>Registro</p>

        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            if (aceptarTerminos) {
              alert(JSON.stringify(values));
              console.log(values);
            } else {
              mostrarErrorTyc();
            }
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form className={styles.form__container}>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                    isRequired
                  >
                    <FormLabel htmlFor="email">Email: </FormLabel>
                    <Input {...field} id="email" placeholder="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                    isRequired
                  >
                    <FormLabel htmlFor="password">Contraseña: </FormLabel>
                    <Input
                      {...field}
                      type="password"
                      id="password"
                      placeholder="contraseña"
                    />
                    <FormErrorMessage className={styles.msg__error}>
                      {form.errors.password}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="passwordConfirmation">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.passwordConfirmation &&
                      form.touched.passwordConfirmation
                    }
                    isRequired
                  >
                    <FormLabel htmlFor="passwordConfirmation">
                      Confirma tu contraseña:
                    </FormLabel>
                    <Input
                      {...field}
                      type="password"
                      id="passwordConfirmation"
                      placeholder="confirma tu contraseña"
                    />
                    <FormErrorMessage>
                      {form.errors.passwordConfirmation}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <div className={styles.popUpContainer}>
                <PopUp setaceptarTerminos={setaceptarTerminos} />

                <small id="error" className={styles.mensajeError}>
                  Debe aceptar los Tyc
                </small>
              </div>

              <Button
                className={styles.btn__signup}
                type="submit"
                colorScheme="teal"
                size="md"
              >
                Registrarme
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
