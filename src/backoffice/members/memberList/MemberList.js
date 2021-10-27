import React, { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from '@chakra-ui/react';
import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { deleteMembers } from '../../../services/apiMembers';
import { useDispatch, useSelector } from 'react-redux';
import { setMember } from '../../../app/members/members';

const MemberList = ({history}) => {
  const dispatch = useDispatch();
  const { membersList, loading, error } = useSelector(state => state.members);
  const handleEdit = member => {
    dispatch(setMember(member));
    history.push('/backoffice/members/edit');
  };
  return (
    <div>
      <Box display="flex" mt="2" justifyContent="flex-start">
        <Link to="/backoffice/members/create">
          <Button
            rightIcon={<AiFillPlusCircle />}
            colorScheme="blue"
            bgColor={'#00214D'}
            variant="solid"
            m={3}
          >
            Crear miembro
          </Button>
        </Link>
      </Box>
      <div className="container">
        <Table size="lg" variant="striped" colorScheme="blue">
          <Thead>
            <Tr bg={'#00214D'}>
              <Th color="white">Name</Th>
              <Th color="white">Photo</Th>
              <Th color="white">Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {!loading &&
              membersList.map(member => (
                <Tr key={member.id}>
                  <Td>{member.name}</Td>
                  <Td>
                    <img className="profilePhoto" src={member.image} alt="" width="50px" />
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
      </div>
    </div>
  );
};

export default MemberList;
