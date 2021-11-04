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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSlide } from '../../app/slides/slides';

const SlidesScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const { slidesList, /* loading, error */ } = useSelector(state => state.slides);
  const handleEdit = slide => {
    dispatch(setSlide(slide));
    history.push(`/backoffice/slides/edit/${slide.id}`);
  };

  // search filter
  const filteredSlides =
    search.length < 3
      ? slidesList
      : slidesList.filter(slide =>
          slide.name.toLowerCase().includes(search.toLowerCase()),
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
              type={'text'}
              autoComplete="off"
              placeholder={'Buscar...'}
              aria-label={'Buscar...'}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </FormControl>
        </Stack>
        <Link to="/backoffice/slides/create">
          <Button
            rightIcon={<AiFillPlusCircle />}
            colorScheme="blue"
            bgColor={'#00214D'}
            variant="solid"
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
            {filteredSlides &&
              filteredSlides.map(slide => (
                <Tr key={slide.id}>
                  <Td>{slide.name}</Td>
                  <Td>
                    <img
                      className="profilePhoto"
                      width="70px"
                      src={slide.image}
                      alt=""
                    />
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
