import React /*, { useState, useEffect } */ from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  UnorderedList,
  ListItem,
  ListIcon,
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
import { MdCheckCircle } from 'react-icons/md';

const Organization = () => {
  const { nosotros /*, loading, error */ } = useSelector(
    state => state.nosotros,
  );

  return (
    <Flex justifyContent="center">
      <Box width="60%">
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
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
        </Heading>
        <Text>{nosotros.short_description}</Text>
        <Text
          p={2}
          borderRadius="10px"
          bgColor="red"
          dangerouslySetInnerHTML={{ __html: nosotros.long_description }}
        ></Text>
        <SimpleGrid columns={2} spacing={10}>
          <Box
            position={'relative'}
            height={'200px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'200px'}
            overflow={'hidden'}
          >
            <Image
              alt={'logo Image'}
              w={'100%'}
              h={'100%'}
              src={nosotros.logo}
            />
          </Box>
          <Box>
            {/* <Text rightIcon={<BsFacebook />}>{nosotros.facebook_url}</Text>
            <Text rightIcon={<BsLinkedin />}>{nosotros.linkedin_url}</Text>
            <Text rightIcon={<BsInstagram />}>{nosotros.instagram_url}</Text>
            <Text rightIcon={<BsTwitter />}>{nosotros.twitter_url}</Text>
            <Text rightIcon={<BsTelephoneFill />}>{nosotros.cellphone}</Text>
            <Text>{nosotros.welcome_text}</Text> */}
            <UnorderedList className="list">
              <ListItem className="listItem">
                <ListIcon as={MdCheckCircle} color="green.500" />
                <BsFacebook className="facebook" />
                {nosotros.facebook_url}
              </ListItem>
              <ListItem>
                <BsInstagram className="instagram" />
                {nosotros.instagram_url}
              </ListItem>
              <ListItem>
                <BsTwitter className="phone" />
                {nosotros.twitter_url}
              </ListItem>
            </UnorderedList>

            {/* <UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList> */}
          </Box>
        </SimpleGrid>
        <Link to="/backoffice/organization/edit">
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'#00214D'}
            bg={'#00214D'}
            _hover={{ bg: '#00214D.100' }}
          >
            Editar
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Organization;

{
  /* <ul className="list">
            <li className="listItem">
              <FaFacebookSquare className="facebook" />
              Facebook: www.facebook.com/{objeto.facebook}
            </li>
            <li>
              <GrInstagram className="instagram" />
              Instagram: www.instagram.com/{objeto.instagram}
            </li>
            <li>
              <FiMail className="mail" />
              Mail: {objeto.mail}
            </li>
            <li>
              <FaPhoneAlt className="phone" /> Telefono: {objeto.phone}
            </li>
          </ul> */
}
