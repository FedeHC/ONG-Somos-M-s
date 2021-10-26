import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
const CardNews = ({news}) => {
  const testimonio = {
    id: 546,
    name: "Somos Más",
    slug: null,
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor.",
    image: "http://ongapi.alkemy.org/storage/iufqw2I1pQ.jpeg",
  };
  const { image, name, content } = testimonio;

  return (
    <Box
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
      mb={3}
      mt={3}
      mx={3}
    >
      <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <Image src={image} layout={"fill"} />
      </Box>
      <Stack>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {name}
        </Heading>
        <Text color={"gray.500"}>{content}</Text>
      </Stack>
    </Box>
  );
};

export default CardNews;
