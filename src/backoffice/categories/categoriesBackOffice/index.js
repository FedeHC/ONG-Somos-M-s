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
  Input,
  Stack,
  FormControl,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoria } from '../../../app/categorias/categoriasReducer';

const CategoriesBackOffice = ({ history }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  // useSelector
  const { categoriasList } = useSelector(state => state.categorias);
  // edit
  const handleEdit = category => {
    dispatch(setCategoria(category));
    history.push(`/backoffice/categories/edit/${category.id}`);
  };

  // search filter
  const filteredCategories =
    search.length < 3
      ? categoriasList
      : categoriasList.filter(category =>
          category.name.toLowerCase().includes(search.toLowerCase()),
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
              id={'email'}
              type={'text'}
              autoComplete="off"
              placeholder={'Buscar...'}
              aria-label={'Buscar...'}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </FormControl>
        </Stack>

        <Link to="/backoffice/categories/create">
          <Button
            rightIcon={<AiFillPlusCircle />}
            alignSelf={'center'}
            colorScheme="blue"
            bgColor={'#00214D'}
            variant="solid"
          >
            Crear Categoria
          </Button>
        </Link>
      </Box>
      <div className="container">
        <Table size="lg" variant="striped" colorScheme="blue">
          <Thead>
            <Tr bg={'#00214D'}>
              <Th color="white">Name</Th>
              <Th color="white">createdAt</Th>
              <Th color="white">Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredCategories &&
              filteredCategories.map(category => (
                <Tr key={category.id}>
                  <Td>{category.name}</Td>
                  <Td>{category.created_at}</Td>
                  <Td>
                    <Button
                      colorScheme="yellow"
                      variant="solid"
                      onClick={() => handleEdit(category)}
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

export default CategoriesBackOffice;
