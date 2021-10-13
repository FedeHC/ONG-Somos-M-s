import React from 'react';

import {Link} from "react-router-dom"

import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';

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
            bg: '#3289fc',
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
        <Link to="/backoffice/organization/edit">
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={"#00214D"}
            bg={'#00214D'}
            _hover={{ bg: '#00214D.100' }}
            >
            Editar
          </Button>        
        </Link>
      </Stack>
    </Stack>
    <Flex
      flex={1}
      justify={'center'}
      align={'center'}
      position={'relative'}
      w={'full'}>
      <Box
        position={'relative'}
        height={'300px'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        width={'full'}
        overflow={'hidden'}>
        <Image
          alt={'Hero Image'}
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={'100%'}
          src={OrganizationData.image}
        />
      </Box>
    </Flex>
  </Stack>
</Container>
 );
}

export default Organization;
