import React from "react";
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

const MemberList = () => {
  let miembros = [
    {
      name: "facundo ferrer",
      image:
        "https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg?x=480&y=375&quality=40",
    },
    {
      name: "facundo",
      image:
        "https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg?x=480&y=375&quality=40",
    },
    {
      name: "facundo",
      image:
        "https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg?x=480&y=375&quality=40",
    },
    {
      name: "facundo",
      image:
        "https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg?x=480&y=375&quality=40",
    },
  ];
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
          {miembros.length > 0
            ? miembros.map((member) => (
                <Tr>
                  <Td>{member.name}</Td>
                  <Td>
                    <img className="profilePhoto" src={member.image} alt="" />
                  </Td>
                  <Td className="buttonField">
                    <Button
                      className="EditButton"
                      colorScheme="yellow"
                      variant="solid"
                    >
                      Editar
                    </Button>
                    <Button colorScheme="red" variant="solid">
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
              ))
            : "no se encontaron miembros"}
        </Tbody>
      </Table>
    </div>
  );
};

export default MemberList;
