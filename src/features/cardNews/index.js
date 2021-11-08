import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import './card.scss';

const CardNews = ({ news }) => {
  return (
    <Box
      maxW={'320px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      mb={8}
      mt={3}
      mx={3}
    >
      <Box h={'210px'} bg={'white.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Image
          src={news.image}
          minH="210px"
          maxH="210px" /* layout={'fill'} */
        />
      </Box>
      <Stack>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          {news.name}
        </Heading>
        <Text
          minH="72px"
          className="textCard"
          dangerouslySetInnerHTML={{ __html: news.content }}
          color={'gray.500'}
        />
      </Stack>
    </Box>
  );
};

export default CardNews;
