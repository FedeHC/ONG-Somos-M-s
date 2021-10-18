import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { AiTwotoneEdit, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./NewsScreen.css";
import { getNews, deleteNews } from "../../services/apiNews";

const NewsScreen = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getNews().then((response) => setNewsList(response.data.data));
  }, []);

  const editNews = (id) => {
    window.location.href = `/backoffice/news/edit/${id}`;
  };
  const deleteNew = (id) => {
    deleteNews(id);
  };
  return (
    <div>
      <Link to="/backoffice/news/create">Crear novedad</Link>
      <div className="container">
        <Table size="lg" variant="striped" colorScheme="teal">
          <Thead>
            <Tr className="trTop">
              <Th>Name</Th>
              <Th>Image</Th>
              <Th>createdAt</Th>
              <Th>Editar</Th>
              <Th>Eliminar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {newsList.length > 0
              ? newsList.map((news) => (
                  <Tr>
                    <Td>{news.name}</Td>
                    <Td>
                      <img className="profilePhoto" src={news.image} alt="" />
                    </Td>
                    <Td>{news.created_at}</Td>
                    <Td className="buttonField">
                      <Button
                        className="EditButton"
                        colorScheme="yellow"
                        variant="solid"
                        onClick={() => {
                          editNews(news.id);
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        colorScheme="red"
                        variant="solid"
                        onClick={() => deleteNew(news.id)}
                      >
                        Eliminar
                      </Button>
                    </Td>
                  </Tr>
                ))
              : "no se encontaron noticias"}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default NewsScreen;
