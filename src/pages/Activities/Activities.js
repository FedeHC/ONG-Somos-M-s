import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Container, Flex, VStack } from "@chakra-ui/react";
import TitleScreen from "../../features/titleScreen/Title";


const Activities = () => {
  return (
    <ChakraProvider>
      <Container>
        <Flex>
          <VStack width="full"
            spacing={10}
            padding={10}
            alignItems="center">

            {/* MAIN TITLE */}
            <div style={{width:"95vw"}}>
            <TitleScreen title={"Actividades"} />
            </div>
     
            {/* Activities go from here */}

          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Activities;
