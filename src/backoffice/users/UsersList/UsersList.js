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
  Select,
  Flex,
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
  const [typeSearch, settypeSearch] = useState(false);
  const dispatch = useDispatch();
  const [rol, setRol] = useState('Todo');
  const [search, setSearch] = useState('');

  const { usersList /* loading, error */ } = useSelector(state => state.users);

  const handleEdit = user => {
    dispatch(setUser(user));
    history.push(`/backoffice/users/edit/${user.id}`);
  };

  // search filter
  const filteredUsers = typeSearch
    ? rol === 'Todo'
      ? usersList
      : rol === 'regular'
      ? usersList.filter(user => user.role_id === 1)
      : usersList.filter(user => user.role_id === 0)
    : search.length < 3
    ? usersList
    : usersList.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      );

  return (
    <Flex justifyContent="center">
      <Box mt="2" m={5} p={3}>
        <Flex justifyContent="space-between" mb="3rem">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            as={'form'}
            spacing={'12px'}
            width={'50%'}
            me={6}
          >
            {typeSearch ? (
              <Select
                width="50%"
                onChange={e => setRol(e.target.value)}
                placeholder="Selecciona rol"
              >
                <option value="Todo">Todo</option>
                <option value="admin">Administrador</option>
                <option value="regular">Usuario Regular</option>
              </Select>
            ) : (
              <FormControl>
                <Input
                  variant={'solid'}
                  width="50%"
                  borderWidth={1}
                  color={'gray.800'}
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  /* borderColor={useColorModeValue('#00214D', 'gray.700')} */
                  type={'text'}
                  autoComplete="off"
                  placeholder={'Buscar...'}
                  aria-label={'Buscar...'}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </FormControl>
            )}
          </Stack>
          <Button
            colorScheme="yellow"
            bgColor={'#ECC948'}
            variant="solid"
            onClick={() => settypeSearch(!typeSearch)}
            p={5}
            mr={2}
          >
            {typeSearch ? 'Filtro por nombre' : 'Filtro por rol'}
          </Button>
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
        </Flex>

        <Box>
          <Table size="lg" variant="striped" colorScheme="blue">
            <Thead>
              <Tr bg={'#00214D'}>
                <Th color="white">Nombre</Th>
                <Th color="white">Email</Th>
                <Th color="white">Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredUsers &&
                filteredUsers.map(user => (
                  <Tr key={user.id}>
                    <Td fontWeight="600">{user.name}</Td>

                    <Td fontWeight="600">{user.email}</Td>
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
        </Box>
      </Box>
    </Flex>
  );
};

export default UsersList;
