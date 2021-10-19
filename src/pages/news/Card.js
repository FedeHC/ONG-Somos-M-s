import React from "react";
import { Box, Badge, Image } from "@chakra-ui/react";

const Card = ({ news }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={news.image} alt="imagen" />

      <Box p="3">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Noticia
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          ></Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {news.name}
        </Box>

        <Box>{news.content}</Box>
      </Box>
    </Box>
  );
};

export default Card;
