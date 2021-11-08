import React from 'react';
import { useSelector } from 'react-redux';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Flex,
  Stack,
  Text,
  Link as LinKChakra,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Button } from '@chakra-ui/react';
import * as Yup from 'yup';
import './loginForm.scss';
import { startLogin } from '../../app/auth/authReducer';
import { useDispatch } from 'react-redux';
import { Spinner } from '../../features/spinner';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('email Invalido').required('Requerido'),

  password: Yup.string()
    .required('Requerido')
    .min(6, 'Se requieren 6 caracteres como mínimo')
    .matches(/^(?=.*[@$!%*#?&])/, '1 caracter especial requerido')
    .matches(/(?=.*\d)/, 'al menos 1 numero requerido')
    .matches(/(?=\w*[a-z])/, 'al menos 1 letra requerida'),
});

const LoginForm = () => {
  const { logged: isAuth, loading } = useSelector(state => state.auth);

  const dispatch = useDispatch();
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
              <Heading fontSize={'4xl'}>Ingresa a Somos Más</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                ¿No tenés una cuenta?
                <LinKChakra
                  color={'blue.400'}
                >
                 <Link to="/register">
                  {' '}
                  Crear una cuenta
                 </Link >
                </LinKChakra>{' '}
                ✌️
              </Text>
            </Stack>
              <Box rounded={'lg'} boxShadow="dark-lg" p={8}>
                <Stack spacing={10}>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values, { resetForm }) => {
                    dispatch(startLogin(values));
                    resetForm({});
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="loginForm">
                      <Field name="email">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.email && form.touched.email}
                          >
                            <FormLabel htmlFor="email">Email</FormLabel>
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
                          >
                            <FormLabel htmlFor="password">Contraseña</FormLabel>
                            <Input
                              {...field}
                              type="password"
                              id="password"
                              placeholder="contraseña"
                            />
                            <FormErrorMessage>
                              {form.errors.password}
                            </FormErrorMessage>
                            <br/><br/>
                          </FormControl>
                        )}
                      </Field>

                      <Button
                        mt={4}
                        width="100%"
                        colorScheme="blue"
                        bg="#00214d"
                        type="submit"
                      >
                        Ingresar
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

export default LoginForm;
