import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Container, Flex, VStack, Heading, Text } from "@chakra-ui/react";
import Title from "./features/activities/detail/title";


const About = ({ mainTitle, sectionTitle, sectionText }) => {
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
            
            {/* SECTION TITLE */}
            <Heading size="xl">{sectionTitle}</Heading>

            {/* SECTION PARAGRAPH */}
            <Text paddingBottom="10%">{sectionText}</Text>

          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default About;
