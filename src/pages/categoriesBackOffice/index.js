import React from "react";
import {
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
import { AiTwotoneEdit, AiOutlineClose, AiFillPlusCircle } from "react-icons/ai";

const CategoriesBackOffice = () => {
  return (
    <div>
      <Box display="flex" mt="2" justifyContent='flex-start'>
      
        <Button // link to /backoffice/categorías/create
          rightIcon={<AiFillPlusCircle />}
          colorScheme="teal" 
          variant="solid" 
        >
          Crear Categoria  
        </Button>
      </Box>
      <div className="container">
        <Table size="lg" variant="striped" colorScheme="teal">
          <Thead>
            <Tr className="trTop">
              <Th>Name</Th>
              <Th>Image</Th>
              <Th>createdAt</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Joel</Td>
              <Td>
                <Image
                  boxSize="100px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
              </Td>
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
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default CategoriesBackOffice;
