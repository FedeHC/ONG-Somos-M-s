import React from "react";
import { ChakraProvider, Container, SimpleGrid, Link,
         Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";


const UsersList = () => {
  return (
    <ChakraProvider>
      <Container>
        <SimpleGrid columns={1}
                    spacing={10}
                    marginTop={10}>

          {/* CREATE USER LINK */}
          <Link href="/backoffice/users/create"
                bg="gray.100"
                padding={5}>Create User</Link>

          {/* TABLE */}
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
              <Tr>
                <Td>User1</Td>
                <Td>user.one@mail.com</Td>
                <Td>
                <Link href="/backoffice/users/create"
                      bg="yellow.100"
                      padding={3}
                      marginBottom={30}>Editar</Link>

                <Link href="/backoffice/users/create"
                      bg="red.100"
                      padding={3}
                      marginBottom={30}>Eliminar</Link>
                </Td>
              </Tr>
              <Tr>
                <Td>User2</Td>
                <Td>user.two@mail.com</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>User3</Td>
                <Td>user.three@mail.com</Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default UsersList;
