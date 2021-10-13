import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from "@chakra-ui/react";
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const CategoriesBackOffice = () => {
  return (
    <div>
      <Box display="flex" mt="2" justifyContent="flex-start">
        <Link to="/backoffice/categorías/create">
          <Button
            rightIcon={<AiFillPlusCircle />}
            colorScheme="teal"
            variant="solid"
          >
            Crear Categoria
          </Button>
        </Link>
      </Box>
      <div className="container">
        <Table size="lg" variant="striped" colorScheme="teal">
          <Thead>
            <Tr className="trTop">
              <Th>Name</Th>
              <Th>createdAt</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Categoria test</Td>
              <Td>7/10/2021</Td>
              <Td>
                <Button colorScheme="yellow" variant="solid">
                  <AiTwotoneEdit />
                </Button>
                <Button ml={5} colorScheme="red" variant="solid">
                  <AiOutlineClose />
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Categoria test 2</Td>
              <Td>11/10/2021</Td>
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
    </div>
  );
};

export default CategoriesBackOffice;
