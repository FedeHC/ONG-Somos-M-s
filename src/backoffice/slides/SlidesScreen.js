import React, { useEffect } from 'react';
import {
  Container,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Image,
  Box,
} from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../reducers/slides';
import { slidesList } from '../../services/slidesServices';

const SlidesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  const { slides } = useSelector(state => state.slides);

  return (
    <VStack mt="2rem">
      <Container maxW="container.xl">
        <Box display="flex" mt="2" justifyContent="flex-start">
          <Link to="/backoffice/slides/create">
            <Button
              rightIcon={<AiFillPlusCircle />}
              colorScheme="teal"
              variant="solid"
            >
              Crear Slide
            </Button>
          </Link>
        </Box>
        <div className="container">
          <Table size="lg" variant="striped" colorScheme="teal">
            <Thead>
              <Tr className="trTop">
                <Th>Title</Th>
                <Th>Image</Th>
                <Th>order</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {slides?.map((slide, i) => (
                <Tr key={i}>
                  <Td>{slide.name}</Td>
                  <Td>
                    <Image
                      htmlWidth="200px"
                      src={slide.image}
                      alt="Segun Adebayo"
                    />
                  </Td>
                  <Td>{slide.order}</Td>
                  <Td>
                    <Button colorScheme="yellow" variant="solid">
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
      </Container>
    </VStack>
  );
};

export default SlidesScreen;
