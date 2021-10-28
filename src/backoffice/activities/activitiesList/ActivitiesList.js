import React from 'react';
import './activitiesList.scss';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from '@chakra-ui/react';
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

  const { actividadesList, loading, error } = useSelector(
    state => state.actividades,
  );

  const handleEdit = activity => {
    dispatch(setActividades(activity));
    history.push(`/backoffice/activities/edit/${activity.id}`);
  };

  return (
    <div>
      <Box display="flex" mt="2" justifyContent="flex-start">
        <Link to="/backoffice/activities/create">
          <Button
            rightIcon={<AiFillPlusCircle />}
            colorScheme="blue"
            bgColor={'#00214D'}
            variant="solid"
            m={3}
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
                    <img className="profilePhoto" width="70px" src={activity.image} alt="" />
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
