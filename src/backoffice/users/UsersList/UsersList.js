import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  Stack,
  FormControl,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../app/users/users';
import { Link } from 'react-router-dom';

const UsersList = ({ history }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const { usersList, loading, error } = useSelector(state => state.users);
  const handleEdit = user => {
    dispatch(setUser(user));
    history.push(`/backoffice/users/edit/${user.id}`);
  };

  // search filter
  const filteredUsers =
    search.length < 3
      ? usersList
      : usersList.filter(user =>
          user.name.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <div>
      <Box
        display="flex"
        mt="2"
        justifyContent="space-between"
        alignContent="center"
        m={5}
        p={3}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          width={'100%'}
          me={6}
        >
          <FormControl>
            <Input
              variant={'solid'}
              width="100%"
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('#00214D', 'gray.700')}
              type={'text'}
              autoComplete="off"
              placeholder={'Buscar...'}
              aria-label={'Buscar...'}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </FormControl>
        </Stack>
        <Link to="/backoffice/users/create">
          <Button
            rightIcon={<AiFillPlusCircle />}
            colorScheme="blue"
            bgColor={'#00214D'}
            variant="solid"
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
            {filteredUsers &&
              filteredUsers.map(user => (
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
