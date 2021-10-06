import React from "react";
import { Box, Badge, Image, StarIcon } from "@chakra-ui/react";

const Card = () => {

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Novedad",
    description: "Bla bla bla bla bla bla bla bla bla",
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="3">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.description}
        </Box>

        
      </Box>
    </Box>
  );
};

export default Card;
