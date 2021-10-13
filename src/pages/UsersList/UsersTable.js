import React from "react";
import { Link, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";


const UsersTable = ({ data }) => {
  return (
    <Table variant="striped"
          colorScheme="gray">

    {/* TABLE HEAD */}
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>

    {/* TABLE BODY */}
    <Tbody>
      {data.map( (user) => 
        <Tr key={user.id}>
          <Td>{user.name}</Td>
          <Td>{user.email}</Td>
          <Td>
          <Link href=""
                color="yellow.600"
                padding={1}
                marginRight={3}
                marginBottom={30}><b>Editar</b></Link>

          <Link href=""
                color="red.600"
                padding={1}
                marginBottom={30}><b>Eliminar</b></Link>
          </Td>
        </Tr>
      )}
    </Tbody>
  </Table>
  );
};

export default UsersTable;
