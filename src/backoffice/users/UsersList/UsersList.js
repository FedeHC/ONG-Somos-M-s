import React from "react";
import { Container, SimpleGrid, Button } from "@chakra-ui/react";
import UsersTable from "./UsersTable";

const UsersList = () => {
  return (
    <Container>
      <SimpleGrid columns={1} spacing={10} marginTop={10}>
        {/* CREATE USER LINK */}
        <Button
          href="/backoffice/users/create"
          type="button"
          colorScheme="gray"
          padding={2}
        >
          Create User
        </Button>

        {/* USERS TABLE */}
        <UsersTable />
      </SimpleGrid>
    </Container>
  );
};

export default UsersList;
