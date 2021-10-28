import React from "react";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";

const Member = (props) => {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        m={3}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={props.image}
          alt={props.name}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {props.name}
        </Heading>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          dangerouslySetInnerHTML={{ __html: props.description }}
          >
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            leftIcon={<IoLogoFacebook />}
            _focus={{
              bg: 'gray.200',
            }}
            onClick={()=>window.open(props.facebookUrl,"_blank")}
            >
            Facebook
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            leftIcon={<IoLogoLinkedin />}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            onClick={()=>window.open(props.linkedinUrl,"_blank")}
            >
            Linkedin
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default Member;
