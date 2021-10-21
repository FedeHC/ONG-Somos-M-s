import React, { useEffect, useState } from "react";
import "./memberList.scss";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { deleteMembers, getMembers } from "../../../services/apiMembers";


const MemberList = () => {

  const handleDelete = (id) => {
    deleteMembers(id); 
  }

  const [members, setMembers] = useState([]);  
  useEffect(() => {
    getMembers().then((response) => {
      setMembers(response.data.data); 
      console.log(response.data.data);
    }) 
  }, [])

  return (
    <div className="listaMiembros">
      <div className="header">
        <p>Lista de miembros</p>
        <Link className="link-button" to="/backoffice/members/create">
          <Button colorScheme="blue">Crear Miembro</Button>
        </Link>
      </div>
      <Table variant="simple" size="sm" className="table">
        <TableCaption>Miembros actuales del equipo</TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Foto de perfil</Th>
            <Th className="acciones">Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {members?.length > 0
            ? members.map((member) => (
              <div key={member.id}>
                <Tr>
                  <Td>{member.name}</Td>
                  <Td>
                    <img className="profilePhoto" src={member.image} alt="" />
                  </Td>
                  <Td className="buttonField">
                    <Link to="/backoffice/members/edit">
                    <Button
                      className="EditButton"
                      colorScheme="yellow"
                      variant="solid"
                    >
                      Editar
                    </Button>
                    </Link>
                    <Button colorScheme="red" variant="solid" onClick={() => handleDelete(member.id)}>
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
                </div>
              ))
            : "no se encontaron miembros"}
        </Tbody>
      </Table>
    </div>
  );
};

export default MemberList;
