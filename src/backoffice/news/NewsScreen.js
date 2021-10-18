import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { AiTwotoneEdit, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./NewsScreen.css";

const NewsScreen = () => {
  return (
    <div>
        <Link to="/backoffice/news/create">Crear novedad</Link>
        <div className="container">
      <Table size="lg" variant="striped" colorScheme="teal">
        <Thead>
          <Tr className="trTop">
            <Th>Name</Th>
            <Th>Image</Th>
            <Th>createdAt</Th>
            <Th>Editar</Th>
            <Th>Eliminar</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Joel</Td>
            <Td>[image]</Td>
            <Td isNumeric>7/10/2021</Td>
            <Td>
              <AiTwotoneEdit />
            </Td>
            <Td>
              <AiOutlineClose />
            </Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
    </div>
  );
};

export default NewsScreen;
