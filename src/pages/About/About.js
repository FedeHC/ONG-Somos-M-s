import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Container, Flex, VStack, Heading, Text } from "@chakra-ui/react";
import Title from "../../features/title/Title";
import { useSelector } from "react-redux";


const About = () => {
  const {name, short_description, long_description} = useSelector(state => state.nosotros.nosotros);
  return (
    <ChakraProvider>
      <Container>
        <Flex>
          <VStack width="full"
                  spacing={10}
                  padding={10}
                  alignItems="center">

            {/* MAIN TITLE */}
            <Title text={name || ""} />
            
            {/* SECTION TITLE */}
            <Heading size="xl">{short_description || ""}</Heading>

            {/* SECTION PARAGRAPH */}
            <Text paddingBottom="10%">{long_description || ""}</Text>

          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default About;
