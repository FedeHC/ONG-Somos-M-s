import React from 'react';

import { Container, Heading, Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const Organization = () => {

 const OrganizationData = {
    //example
   name:"Nombre de la ONG",
   image:"https://via.placeholder.com/700",
   shortDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
 }

 return (
  <Container maxW={'7xl'}>
  <Stack
    align={'center'}
    spacing={{ base: 8, md: 10 }}
    py={{ base: 20, md: 28 }}
    direction={{ base: 'column', md: 'row' }}>
    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
        <Text
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'teal.400',
            zIndex: -1,
          }}>
          {OrganizationData.name}
        </Text>
        <br />
      </Heading>
      <Text >
        {OrganizationData.shortDescription}
      </Text>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: 'column', sm: 'row' }}>
        <Button
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={6}
          colorScheme={"teal"}
          bg={'teal.400'}
          _hover={{ bg: 'teal.500' }}
          >
          Editar
        </Button>
      </Stack>
    </Stack>
  </Stack>
</Container>
 );
}

export default Organization;
