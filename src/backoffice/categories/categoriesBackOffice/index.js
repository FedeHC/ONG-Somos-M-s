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
  Flex,
} from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategorias, deleteCategories, setCategoria } from '../../../app/categorias/categoriasReducer';
import { questionAlert, successAlert } from '../../../features/alert/alert';

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
  // questionAlert('estás seguro de eliminar esta actividad?').then(result => {
  //   if (result) {
  //     dispatch(deleteActividades(id));
  //     dispatch(deleteActividad(id));
  //     successAlert();
  //   }
  // });
  const handleDelete = (id)=>{
    questionAlert('estás seguro de eliminar esta actividad?').then(result => {
      if (result) {
          dispatch(deleteCategorias(id));
          dispatch(deleteCategories(id));
          successAlert();
        }
      });
  }

  // search filter
  const filteredCategories =
    search.length < 3
      ? categoriasList
      : categoriasList.filter(category =>
          category.name.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <Flex justifyContent="center">
      <Box mt="2" m={5} p={3}>
        <Flex justifyContent="space-between" mb="3rem">
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
        </Flex>
        <Box width="60vw">
          <Table size="lg" variant="striped" colorScheme="blue">
            <Thead>
              <Tr bg={'#00214D'}>
                <Th color="white">Nombre</Th>
                <Th color="white">Creado</Th>
                <Th color="white">Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredCategories &&
                filteredCategories.map(category => (
                  <Tr key={category.id}>
                    <Td fontWeight="600">{category.name}</Td>
                    <Td fontWeight="600">
                      {category.created_at.substring(0, 10)}
                    </Td>
                    <Td>
                      <Button
                        colorScheme="yellow"
                        variant="solid"
                        onClick={() => handleEdit(category)}
                      >
                        <AiTwotoneEdit />
                      </Button>
                      <Button
                       ml={5} 
                       colorScheme="red" 
                       variant="solid"
                       onClick={()=> handleDelete(category.id)}
                       >
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

export default CategoriesBackOffice;
