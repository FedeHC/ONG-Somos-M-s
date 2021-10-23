import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from "@chakra-ui/react";
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { getCategories } from "../../../services/apiCategories";
import { useSelector } from "react-redux";
const CategoriesBackOffice = () => {
 
  const {categoriasList, loading, error} = useSelector(state => state.categorias);

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
            {!loading && categoriasList.map((category) => (
              <Tr key={category.id}>
                <Td>{category.name}</Td>
                <Td>{category.created_at}</Td>
                <Td>
                  <Button colorScheme="yellow" variant="solid">
                    <AiTwotoneEdit />
                  </Button>
                  <Button ml={5} colorScheme="red" variant="solid">
                    <AiOutlineClose />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default CategoriesBackOffice;
