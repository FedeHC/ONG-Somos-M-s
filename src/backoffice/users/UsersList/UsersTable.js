import React, { useEffect } from 'react';
import { deleteUser } from '../../../services/apiUsers';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { getList } from '../../../reducers/users';
import { useDispatch, useSelector } from 'react-redux';

const UsersTable = () => {
  const { users } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
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
        {users?.map(user => (
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
