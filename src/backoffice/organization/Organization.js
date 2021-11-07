import React /*, { useState, useEffect } */ from 'react';
import './organization.css';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  UnorderedList,
  ListItem,
} from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsTelephoneFill,
} from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';

const Organization = () => {
  const { nosotros /*, loading, error */ } = useSelector(
    state => state.nosotros,
  );

  return (
    <Flex justifyContent="center">
      <Box width="60%">
        <Flex justifyContent="center">
          <Text m={3} borderBottom="1px " borderColor="gray.700" fontSize="3xl">
            Información de la ONG
          </Text>
        </Flex>
        <Text m={3} color={'linkedin.500'} fontSize="xl">
          Texto de bienvenida:
        </Text>
        <Text fontSize="4xl">{nosotros.welcome_text}</Text>
        <Text m={3} color={'linkedin.500'} fontSize="xl">
          Nombre de la ONG:
        </Text>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '6xl' }}
        >
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
            }}
          >
            {nosotros.name}
          </Text>
          <br />
        </Heading>{' '}
        <Text m={3} color={'linkedin.500'} fontSize="xl">
          Descripción corta:
        </Text>
        <Text p={2} borderRadius="10px" bgColor="#3289fc">
          {nosotros.short_description}
        </Text>
        <Text m={3} color={'linkedin.500'} fontSize="xl">
          Descripción larga:
        </Text>
        <Text
          p={2}
          borderRadius="10px"
          bgColor="#3289fc"
          dangerouslySetInnerHTML={{ __html: nosotros.long_description }}
        ></Text>
        <SimpleGrid my={8} columns={2} spacing={8}>
          <Box
            position={'relative'}
            height={'230px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'230px'}
            overflow={'hidden'}
          >
            <Text color={'linkedin.500'} fontSize="xl">
              Logo de la página:
            </Text>
            <Image
              alt={'logo Image'}
              w={'100%'}
              h={'80%'}
              src={nosotros.logo}
            />
          </Box>
          <Box>
            <Text m={3} color={'linkedin.500'} fontSize="xl">
              Info de redes sociales:
            </Text>
            <UnorderedList className="orgList">
              <ListItem className="listItem">
                <BsLinkedin m={2} className="linkedin" />:{' '}
                {nosotros.linkedin_url}
              </ListItem>
              <ListItem className="listItem">
                <BsFacebook m={2} className="facebook" />:{' '}
                {nosotros.facebook_url}
              </ListItem>
              <ListItem className="listItem">
                <BsInstagram m={2} className="instagram" />:{' '}
                {nosotros.instagram_url}
              </ListItem>
              <ListItem className="listItem">
                <BsTwitter m={2} className="twitter" />: {nosotros.twitter_url}
              </ListItem>
              <ListItem className="listItem">
                <BsTelephoneFill m={2} className="phone" />:{' '}
                {nosotros.cellphone}
              </ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
        <Flex justifyContent="center">
          <Link to="/backoffice/organization/edit">
            <Button
              borderRadius="10px"
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              /*               colorScheme={'#00214D'}
               */ /* bg={'#00214D'} */
              /*               _hover={{ bg: '#00214D.100' }}
               */ mb={8}
              rightIcon={<GrEdit />}
              colorScheme="blue"
              variant="outline"
            >
              Editar
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Organization;
