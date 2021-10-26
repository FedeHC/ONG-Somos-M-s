import React from 'react';
import './activitiesList.scss';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActividades } from '../../../reducers/actividadesReducer';
const ActivitiesList = () => {
  const dispatch = useDispatch();

  const { actividadesList, loading, error } = useSelector(
    state => state.actividades,
  );

  const handleEdit = activity => {
    dispatch(setActividades(activity));
  };

  return (
    <div className="activityList">
      <div className="header">
        <p>Lista de actividades</p>
        <Link className="link-button" to="/backoffice/activities/create">
          <Button colorScheme="blue">Crear Actividad</Button>
        </Link>
      </div>
      <Table variant="simple" size="sm" className="table">
        <TableCaption>Actividades actuales</TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Foto de descripción</Th>
            <Th>Fecha de creación</Th>
            <Th className="acciones">Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {actividadesList.length > 0
            ? actividadesList.map(activity => (
                <Tr>
                  <Td>{activity.name}</Td>
                  <Td>
                    <img
                      className="activityPhoto"
                      src={activity.image}
                      alt=""
                    />
                  </Td>
                  <Td>{activity.created_at}</Td>

                  <Td className="buttonField">
                    <Button
                      className="EditButton"
                      colorScheme="yellow"
                      variant="solid"
                      onClick={() => handleEdit(activity)}
                    >
                      Editar
                    </Button>

                    <Button colorScheme="red" variant="solid">
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
              ))
            : 'no se encontaron actividades'}
        </Tbody>
      </Table>
    </div>
  );
};

export default ActivitiesList;
