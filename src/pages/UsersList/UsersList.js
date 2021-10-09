import React from "react";
import { ChakraProvider, Container, SimpleGrid, Link } from "@chakra-ui/react";
import UsersTable from "./UsersTable";


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
                padding={2}><b>Create User</b></Link>

          {/* USERS TABLE */}
          {/* Using mocking data */}
          <UsersTable data={[ { id: 0, 
                                name: "User1",
                                email: "user.one@mail.com"},
                              { id: 1, 
                                name: "User2",
                                email: "user.two@mail.com"},
                              { id: 2, 
                                name: "User3",
                                email: "user.three@mail.com"} ]} />

        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default UsersList;
