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
import { Link } from 'react-router-dom';
import {
  setNovedad,
  deleteNovedad,
} from '../../app/novedades/novedadesReducer';
import {
  errorAlert,
  questionAlert,
  successAlert,
} from '../../features/alert/alert';

const NewsScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const { novedadesList, loading, error } = useSelector(
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
      </Box>
      <div className="container">
        <Table size="lg" variant="striped" colorScheme="blue">
          <Thead>
            <Tr bg={'#00214D'}>
              <Th color="white">Name</Th>
              <Th color="white">Image</Th>
              <Th color="white">createdAt</Th>
              <Th color="white">Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredNovedades &&
              filteredNovedades.map(novedad => (
                <Tr key={novedad.id}>
                  <Td>{novedad.name}</Td>
                  <Td>
                    <img
                      className="profilePhoto"
                      width="70px"
                      src={novedad.image}
                      alt=""
                    />
                  </Td>
                  <Td>{novedad.created_at}</Td>
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
      </div>
    </div>
  );
};

export default NewsScreen;
