import React, { useState, useEffect } from 'react';

import { Formik, Form, Field } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Flex,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  Link,
} from '@chakra-ui/react';
import { signupSchema, mostrarErrorTyc } from '../../config/signupSchema';
import GoogleMaps from '../../features/googleMaps/GoogleMaps';
import PopUp from '../../features/pdfReader/PopUp';
import styles from './register.module.css';

export const Register = ({history}) => {
  const [aceptarTerminos, setaceptarTerminos] = useState(false);
  const [mapLocation, setMapLocation] = useState('');

  useEffect(() => {
    console.log(mapLocation);
  }, [mapLocation]);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>¡Create una cuenta en Somos Más!!</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          ¿ya tienes una cuenta? <Link color={'blue.400'} onClick={()=>history.push("/login")}> Ingresá en Somos Mas</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="dark-lg"
          p={8}
        >
          <Stack spacing={4}>
            <Formik
              initialValues={{
                email: '',
                password: '',
                passwordConfirmation: '',
              }}
              validationSchema={signupSchema}
              onSubmit={values => {
                if (aceptarTerminos) {
                  const values0 = Object.assign(values, mapLocation);
                  alert(JSON.stringify(values0));
                  console.log(values0);
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
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
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
                  <div className={styles.mapContainer}>
                    <GoogleMaps setMapLocation={setMapLocation} />
                  </div>
                  <div className={styles.popUpContainer}>
                    <PopUp setaceptarTerminos={setaceptarTerminos} />
                    <small id="error" className={styles.mensajeError}>
                      Debe aceptar los Tyc
                    </small>
                  </div>

                  <Button
                    mt={4}
                    className={styles.btn__signup}
                    type="submit"
                    width="100%"
                    colorScheme="blue"
                    bg="#00214d"
                  >
                    Registrarme
                  </Button>
                </Form>
              )}
            </Formik>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
