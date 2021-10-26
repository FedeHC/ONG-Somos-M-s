import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from './Logo.png';
import OngPhoto from './OngPhoto.jpg';
import { FaLinkedin } from 'react-icons/fa';

export default function SocialProfileWithImage() {
  return (
    <Center py={6}>
      <Box
        w={'300px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image h={'120px'} w={'full'} src={OngPhoto} objectFit={'cover'} />
        <Flex justify={'center'}>
          <Avatar
            size={'xl'}
            src={Logo}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Somos Mas
            </Heading>
            <Text color={'gray.500'}>Perfil de Linkedin</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>234</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Seguidores
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>421</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Seguidos
              </Text>
            </Stack>
          </Stack>

          <Button
            colorScheme="linkedin"
            leftIcon={<FaLinkedin />}
            w={'full'}
            mt={8}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/somos-mas-85b310224/',
                '_blank',
              )
            }
          >
            Siguenos
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
