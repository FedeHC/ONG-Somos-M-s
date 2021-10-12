import React from "react";
import { ChakraProvider, Container, SimpleGrid, Button } from "@chakra-ui/react";
import UsersTable from "./UsersTable";


const UsersList = ({ data }) => {
  return (
    <ChakraProvider>
      <Container>
        <SimpleGrid columns={1}
                    spacing={10}
                    marginTop={10}>

          {/* CREATE USER LINK */}
          <Button href="/backoffice/users/create"
                  type="button"
                  colorScheme="gray"
                  padding={2}>Create User</Button>

          {/* USERS TABLE */}
          <UsersTable data={data}/>

        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default UsersList;
