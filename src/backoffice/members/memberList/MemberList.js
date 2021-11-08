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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMember } from '../../../app/members/members';

const MemberList = ({ history }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const { membersList /* loading, error */ } = useSelector(
    state => state.members,
  );
  const handleEdit = member => {
    dispatch(setMember(member));
    history.push(`/backoffice/members/edit/${member.id}`);
  };

  // search filter
  const filteredMembers =
    search.length < 3
      ? membersList
      : membersList.filter(member =>
          member.name.toLowerCase().includes(search.toLowerCase()),
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
                type={'text'}
                autoComplete="off"
                placeholder={'Buscar...'}
                aria-label={'Buscar...'}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </FormControl>
          </Stack>
          <Link to="/backoffice/members/create">
            <Button
              rightIcon={<AiFillPlusCircle />}
              colorScheme="blue"
              bgColor={'#00214D'}
              variant="solid"
            >
              Crear miembro
            </Button>
          </Link>
        </Flex>
        <Box width="60vw">
          <Table size="lg" variant="striped" colorScheme="blue">
            <Thead>
              <Tr bg={'#00214D'}>
                <Th color="white">Nombre</Th>
                <Th color="white">Foto</Th>
                <Th color="white">Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredMembers &&
                filteredMembers.map(member => (
                  <Tr key={member.id}>
                    <Td fontWeight="600">{member.name}</Td>
                    <Td>
                      <img
                        className="profilePhoto"
                        src={member.image}
                        alt=""
                        width="70px"
                      />
                    </Td>
                    <Td>
                      <Button
                        colorScheme="yellow"
                        variant="solid"
                        onClick={() => handleEdit(member)}
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
        </Box>
      </Box>
    </Flex>
  );
};

export default MemberList;
