import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Container, Flex, VStack } from "@chakra-ui/react";
import Title from "./features/activities/detail/title";


const Activities = ({ mainTitle }) => {
  return (
    <ChakraProvider>
      <Container>
        <Flex>
          <VStack width="full"
            spacing={10}
            padding={10}
            alignItems="center">

            {/* MAIN TITLE */}
            <Title text={mainTitle} />

            {/* Activities go from here */}

          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Activities;
