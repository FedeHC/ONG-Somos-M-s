import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNovedad } from '../../app/novedades/novedadesReducer';

const NewsScreen = ({history}) => {
  const dispatch = useDispatch();
  const { novedadesList, loading, error } = useSelector(
    state => state.novedades,
  );
  const handleEdit = (novedad) =>{
    dispatch(setNovedad(novedad));
    history.push(`/backoffice/news/edit/${novedad.id}`);
  }

  return (
    <div>
      <Box display="flex" mt="2" justifyContent="flex-start">
        <Link to="/backoffice/news/create">
          <Button
            rightIcon={<AiFillPlusCircle />}
            colorScheme="blue"
            bgColor={'#00214D'}
            variant="solid"
            m={3}
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
            {!loading &&
              novedadesList.map(novedad => (
                <Tr key={novedad.id}>
                  <Td>{novedad.name}</Td>
                  <Td>
                    <img className="profilePhoto" width="70px" src={novedad.image} alt="" />
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

export default NewsScreen;
