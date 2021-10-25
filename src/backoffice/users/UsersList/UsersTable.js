import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../../services/apiUsers';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

const UsersTable = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getUsers().then(response => {
      console.log(response);

      setUserList(response?.data?.data);
    });
    console.log(userList);
  }, []);

  const editUser = id => {
    window.location.href = `/backoffice/users/edit/${id}`;
  };

  const deleteUsers = id => {
    deleteUser(id);
  };
  return (
    <Table variant="striped" colorScheme="gray">
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
        {userList?.map(user => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>
              <Button
                href=""
                color="yellow.600"
                marginRight={3}
                onClick={() => editUser(user.id)}
              >
                <b>Editar</b>
              </Button>

              <Button
                href=""
                color="red.600"
                onClick={() => deleteUsers(user.id)}
              >
                <b>Eliminar</b>
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default UsersTable;
