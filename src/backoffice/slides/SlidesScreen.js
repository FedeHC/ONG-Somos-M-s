import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSlide } from '../../app/slides/slides';

const SlidesScreen = ({history}) => {
  const dispatch = useDispatch();
 
   const {slidesList, loading, errror} = useSelector(state => state.slides);
  const handleEdit = (slide) =>{
      dispatch(setSlide(slide));
      history.push("/backoffice/slides/edit");
  }

  return (
    <div>
      <Box display="flex" mt="2" justifyContent="flex-start">
        <Link to="/backoffice/slides/create">
          <Button
            rightIcon={<AiFillPlusCircle />}
            colorScheme="blue"
            bgColor={'#00214D'}
            variant="solid"
            m={3}
          >
            Crear Slide
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
              slidesList.map(slide => (
                <Tr key={slide.id}>
                  <Td>{slide.name}</Td>
                  <Td>
                    <img className="profilePhoto" src={slide.image} alt="" />
                  </Td>
                  <Td>{slide.created_at}</Td>
                  <Td>
                    <Button
                      colorScheme="yellow"
                      variant="solid"
                      onClick={() => handleEdit(slide)}
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

export default SlidesScreen;
