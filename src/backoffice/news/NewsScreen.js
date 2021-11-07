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
  Flex,
} from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setNovedad,
  deleteNovedad,
} from '../../app/novedades/novedadesReducer';
import {
  // errorAlert,
  questionAlert,
  successAlert,
} from '../../features/alert/alert';

const NewsScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const { novedadesList /* loading, error */ } = useSelector(
    state => state.novedades,
  );
  const handleEdit = novedad => {
    dispatch(setNovedad(novedad));
    history.push(`/backoffice/news/edit/${novedad.id}`);
  };

  const handleDelete = id => {
    questionAlert('estás seguro de eliminar esta actividad?').then(result => {
      if (result) {
        dispatch(deleteNovedad(id));
        successAlert();
      }
    });
  };
  // search filter
  const filteredNovedades =
    search.length < 3
      ? novedadesList
      : novedadesList.filter(news =>
          news.name.toLowerCase().includes(search.toLowerCase()),
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
          <Link to="/backoffice/news/create">
            <Button
              rightIcon={<AiFillPlusCircle />}
              colorScheme="blue"
              bgColor={'#00214D'}
              variant="solid"
            >
              Crear Novedad
            </Button>
          </Link>
        </Flex>
        <Box width="60vw">
          <Table size="lg" variant="striped" colorScheme="blue">
            <Thead>
              <Tr bg={'#00214D'}>
                <Th color="white">Nombre</Th>
                <Th color="white">Imagen</Th>
                <Th color="white">Creado</Th>
                <Th color="white">Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredNovedades &&
                filteredNovedades.map(novedad => (
                  <Tr key={novedad.id}>
                    <Td fontWeight="600">{novedad.name}</Td>
                    <Td>
                      <img
                        className="profilePhoto"
                        width="70px"
                        src={novedad.image}
                        alt=""
                      />
                    </Td>
                    <Td fontWeight="600">
                      {novedad.created_at.substring(0, 10)}
                    </Td>
                    <Td>
                      <Button
                        colorScheme="yellow"
                        variant="solid"
                        onClick={() => handleEdit(novedad)}
                      >
                        <AiTwotoneEdit />
                      </Button>
                      <Button
                        ml={5}
                        colorScheme="red"
                        variant="solid"
                        onClick={() => handleDelete(novedad.id)}
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

export default NewsScreen;
