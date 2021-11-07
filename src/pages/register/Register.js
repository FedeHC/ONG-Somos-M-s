import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  /* useColorModeValue, */
  Heading,
  Link,
} from '@chakra-ui/react';
import { signupSchema, mostrarErrorTyc } from './signupSchema';
import GoogleMaps from '../../features/googleMaps/GoogleMaps';
import PopUp from '../../features/pdfReader/PopUp';
import styles from './register.module.css';
// import { registerUSer } from '../../services/apiAuth';
// import { successAlert } from '../../features/alert/alert';
import { Spinner } from '../../features/spinner';
import { startRegister } from '../../app/auth/authReducer';

export const Register = ({ history }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { logged: isAuth, loading } = useSelector(state => state.auth);
  const [aceptarTerminos, setaceptarTerminos] = useState(false);
  const [mapLocation, setMapLocation] = useState('');

  useEffect(() => {
    console.log(mapLocation);
  }, [mapLocation]);
  return (
    <>
      {loading ? (
        <Box
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner />
        </Box>
      ) : (
        <Flex minH={'100vh'} align={'center'} justify={'center'}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>
                Registrate en Somos Más
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                ¿Ya tenés una cuenta?{' '}
                <Link color={'blue.400'} onClick={() => history.push('/login')}>
                  {' '}
                  Ingresá a Somos Mas
                </Link>{' '}
                ✌️
              </Text>
            </Stack>
            <Box rounded={'lg'} boxShadow="dark-lg" p={8}>
              <Stack spacing={4}>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                  }}
                  validationSchema={signupSchema}
                  onSubmit={async (values, { resetForm }) => {
                    if (aceptarTerminos) {
                      // const values0 = Object.assign(values, mapLocation);
                      const { name, email, password } = values;
                      dispatch(startRegister({name,email,password}));
                      history.replace("/");
                    } else {
                      mostrarErrorTyc();
                    }
                  }}
                >
                  {({ isSubmitting, handleSubmit }) => (
                    <Form className={styles.form__container}>
                      <Field name="name">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.name && form.touched.name}
                            isRequired
                          >
                            <FormLabel htmlFor="name">Nombre: </FormLabel>
                            <Input
                              {...field}
                              type="text"
                              id="name"
                              placeholder="nombre"
                            />
                            <FormErrorMessage>
                              {form.errors.name}
                            </FormErrorMessage>
                            <br/><br/>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="email">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.email && form.touched.email}
                            isRequired
                          >
                            <FormLabel htmlFor="email">Email: </FormLabel>
                            <Input {...field} id="email" placeholder="email" />
                            <FormErrorMessage>
                              {form.errors.email}
                            </FormErrorMessage>
                            <br/><br/>
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
                            <FormLabel htmlFor="password">
                              Contraseña:{' '}
                            </FormLabel>
                            <Input
                              {...field}
                              type="password"
                              id="password"
                              placeholder="contraseña"
                            />
                            <FormErrorMessage className={styles.msg__error}>
                              {form.errors.password}
                            </FormErrorMessage>
                            <br/><br/>
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
                            <br/>
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
      )}
    </>
  );
};
