import React, { useEffect, useState } from "react";
import {
  Container,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useListSlides } from "../../HTTPServices/slidesServices";
import axios from "axios";
import { tokenValidate } from "../../features/methods/tokenValidate";

const SlidesScreen = () => {
  const list = useListSlides("http://ongapi.alkemy.org/api/slides");

  console.log(list);

  return (
    <VStack mt="2rem">
      <Container maxW="container.xl">
        <Box display="flex" mt="2" justifyContent="flex-start">
          <Link to="/backoffice/slides/create">
            <Button
              rightIcon={<AiFillPlusCircle />}
              colorScheme="teal"
              variant="solid"
            >
              Crear Slide
            </Button>
          </Link>
        </Box>
        <div className="container">
          <Table size="lg" variant="striped" colorScheme="teal">
            <Thead>
              <Tr className="trTop">
                <Th>Title</Th>
                <Th>Image</Th>
                <Th>order</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Esto es un Slide</Td>
                <Td>
                  <Image
                    htmlWidth="200px"
                    src="http://ongapi.alkemy.org/storage/X3uSu5XCJ3.jpeg"
                    alt="Segun Adebayo"
                  />
                </Td>
                <Td>3</Td>
                <Td>
                  <Button colorScheme="yellow" variant="solid">
                    <AiTwotoneEdit />
                  </Button>
                  <Button ml={5} colorScheme="red" variant="solid">
                    <AiOutlineClose />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </Container>
    </VStack>
  );
};

export default SlidesScreen;
