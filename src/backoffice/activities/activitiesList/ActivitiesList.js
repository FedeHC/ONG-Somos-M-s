import React, { useState } from 'react';
import './activitiesList.scss';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  FormControl,
  Stack,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActividades } from '../../../app/actividades/actividadesReducer';

const ActivitiesList = ({ history }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const { actividadesList, loading, error } = useSelector(
    state => state.actividades,
  );

  const handleEdit = activity => {
    dispatch(setActividades(activity));
    history.push(`/backoffice/activities/edit/${activity.id}`);
  };

  return (
    <div>
      <Box display="flex" mt="2" justifyContent="space-between" alignContent="center" m={5} p={3} >
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
              onChange={ (e)=>setSearch(e.target.value) }
            />
          </FormControl>
        </Stack>
        <Link to="/backoffice/activities/create">
          <Button
            rightIcon={<AiFillPlusCircle />}
            colorScheme="blue"
            bgColor={'#00214D'}
            variant="solid"
          >
            Crear Actividad
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
            {!loading &&
              actividadesList.map(activity => (
                <Tr key={activity.id}>
                  <Td>{activity.name}</Td>
                  <Td>
                    <img
                      className="profilePhoto"
                      width="70px"
                      src={activity.image}
                      alt=""
                    />
                  </Td>
                  <Td>{activity.created_at}</Td>
                  <Td>
                    <Button
                      colorScheme="yellow"
                      variant="solid"
                      onClick={() => handleEdit(activity)}
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

export default ActivitiesList;
