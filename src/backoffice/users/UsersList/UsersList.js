import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../app/users/users";
import { Link } from "react-router-dom";

const UsersList = ({history}) => {

  const dispatch = useDispatch();
  const {usersList, loading, error} = useSelector(state => state.users);
  const handleEdit = (user) => {
      dispatch(setUser(user));
      history.push(`/backoffice/users/edit/${user.id}`);
  }

  return (
    <div>
    <Box display="flex" mt="2" justifyContent="flex-start">
      <Link to="/backoffice/users/create">
        <Button
          rightIcon={<AiFillPlusCircle />}
          colorScheme="blue"
          bgColor={'#00214D'}
          variant="solid"
          m={3}
        >
          Crear usuario
        </Button>
      </Link>
    </Box>
    <div className="container">
      <Table size="lg" variant="striped" colorScheme="blue">
        <Thead>
          <Tr bg={'#00214D'}>
            <Th color="white">Name</Th>
            <Th color="white">Email</Th>
            <Th color="white">Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {!loading &&
            usersList.map(user => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                
                <Td>{user.email}</Td>
                <Td>
                  <Button
                    colorScheme="yellow"
                    variant="solid"
                    onClick={() => handleEdit(user)}
                  >
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

export default UsersList;
