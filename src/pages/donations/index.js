import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
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
} from "@chakra-ui/react";

import "./donations.css";

const DonationsSchema = Yup.object().shape({
  email: Yup.string().email("email Invalido").required("Requerido"),
});
const Donations = ({ text }) => {
  const [pagar, setPagar] = useState(false);
  const textToShow = text ? text : "Esto es un texto de prueba";
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      py={12}
      bg={"#00214D"}
    >
      <Stack
        width={600}
        boxShadow={"2xl"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        p={10}
        spacing={8}
        align={"center"}
      >
        <Stack align={"center"} spacing={2}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"3xl"}
            color={useColorModeValue("gray.800", "gray.200")}
          >
            Contribuye
          </Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            {textToShow}
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={DonationsSchema}
            onSubmit={(values) => {
              window.open("https://mpago.la/1He3ULx","__blank");
            }}
          >
            {({ errors, touched }) => (
              <Form
                className="email___container"
                spacing={4}
                direction={{ base: "column", md: "row" }}
                w={"full"}
              >
                <Field name="email" width={"550px"}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        {...field}
                        id="email"
                        type={"text"}
                        placeholder={"john@doe.net"}
                        rounded={"full"}
                        border={0}
                        width={"350px"}
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                   <Button
                      mb={errors.email ? "27px" : 0}
                      ml={4}
                      color="white"
                      backgroundColor="#009EE3"
                      variant="outline"
                      _hover={{
                        background: "#009EE3",
                        color: "white",
                      }}
                      cursor="pointer"
                      type="submit"
                    >
                      Contribuir
                    </Button>
              </Form>
            )}
          </Formik>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Donations;
