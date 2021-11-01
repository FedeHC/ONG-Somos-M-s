import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Flex,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@chakra-ui/react';
import * as Yup from 'yup';
import './loginForm.scss';
import { startLogin } from '../../app/auth/authReducer';
import { useDispatch } from 'react-redux';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('email Invalido').required('Requerido'),

  password: Yup.string()
    .required('Requerido')
    .min(6, 'Se requieren 6 caracteres como mínimo')
    .matches(/^(?=.*[@$!%*#?&])/, '1 caracter especial requerido')
    .matches(/(?=.*\d)/, 'al menos 1 numero requerido')
    .matches(/(?=\w*[a-z])/, 'al menos 1 letra requerida'),
});

const LoginForm = ({history}) => {
  const dispatch = useDispatch();
  return(
  <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}
  >
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>¡Ingresa a Somos Más!!</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
        ¿No tienes una cuenta?<Link color={'blue.400'} onClick={()=>history.push("/register")} > Crear una</Link> ✌️
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
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              dispatch(startLogin(values));
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
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
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
)};

export default LoginForm;
