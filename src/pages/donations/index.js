import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  useColorModeValue,
  FormControl,
  FormErrorMessage,
  Icon,
} from '@chakra-ui/react';
import { AiTwotoneHeart } from 'react-icons/ai';
import { GiArrowDunk } from 'react-icons/gi';

import './donations.css';

const DonationsSchema = Yup.object().shape({
  email: Yup.string().email('email Invalido').required('Requerido'),
});
const Donations = ({ text }) => {
  const [pagar, setPagar] = useState(false);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      py={12}
      bg={'#00214D'}
    >
      <Stack
        width={700}
        boxShadow={'2xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        p={10}
        spacing={8}
        align={'center'}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          fontAlign="center"
        >
          Ayuda a la ONG <br />
          <Flex justifyContent="center">
            <Text textAlign="center" as={'span'} color={'linkedin.500'}>
              a crecer!!
            </Text>
          </Flex>
        </Heading>

        <Text color={'gray.500'}>
          Tu solidaridad de hoy se puede transformar en la esperanza y
          resiliencia de muchas personas que se encuentran en situación de
          vulnerabilidad en nuestra comunidad.
        </Text>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={DonationsSchema}
            onSubmit={values => {
              window.open('https://mpago.la/1He3ULx', '__blank');
            }}
          >
            {({ errors, touched }) => (
              <Form
                className="email___container"
                spacing={4}
                direction={{ base: 'column', md: 'row' }}
                w={'full'}
              >
                <Field name="email" width={'550px'}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        {...field}
                        id="email"
                        type={'text'}
                        placeholder={'Ingresa tu email'}
                        rounded={'full'}
                        border={0}
                        width={'300px'}
                        mr={2}
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Stack
                  direction={'column'}
                  spacing={3}
                  align={'center'}
                  alignSelf={'center'}
                  position={'relative'}
                >
                  <Button
                    mb={errors.email ? '27px' : 0}
                    color="white"
                    bg="linkedin.500"
                    rounded={'full'}
                    px={6}
                    _hover={{
                      bg: 'linkedin.300',
                    }}
                    rightIcon={<AiTwotoneHeart />}
                    type="submit"
                  >
                    Contribuir
                  </Button>

                  <Flex justifyContent="center">
                    <Icon
                      as={GiArrowDunk}
                      position={'absolute'}
                      right={-91}
                      top={'10px'}
                      w="3rem"
                      h="3rem"
                      transform={'rotate(130deg)'}
                    />
                    <Text
                      fontSize={'2xl'}
                      fontFamily={'Caveat'}
                      position={'absolute'}
                      right={'-140px'}
                      top={'-20px'}
                      transform={'rotate(10deg)'}
                    >
                      Por favor!
                    </Text>
                  </Flex>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Donations;
