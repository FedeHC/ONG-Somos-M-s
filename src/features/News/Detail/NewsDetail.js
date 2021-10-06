import React from "react";
import Title from "./Title.js";
import { Box, SimpleGrid } from "@chakra-ui/react";
import "./NewsDetail.scss";

const NewsDetail = (props) => {
  let objetoPrueba = {
    titulo: "novedad3",
    textoNovedad:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis, nisi vel laoreet condimentum, velit lacus aliquet lectus, non finibus enim turpis id augue. Sed venenatis sapien ac justo porttitor euismod. Phasellus lobortis eu justo ac euismod. Vivamus at metus et sapien malesuada aliquam ac eget odio. Pellentesque quis varius urna. ",
    imagen:
      "https://educowebmedia.blob.core.windows.net/educowebmedia/educospain/media/images/blog/ong-y-ods.jpg",
  };
  return (
    <>
      <Title
        text={objetoPrueba.titulo}
        image="https://fondosmil.com/fondo/17010.jpg"
      />
      <SimpleGrid columns={2} spacing={50} margin={20} className="simpleGrid">
        <Box height="80px" padding="10px">
          <img src={objetoPrueba.imagen} className="newsImage" alt="" />
        </Box>
        <Box height="100%" padding="10px" className="newsText">
          <h1>Detalles de novedad</h1>
          <h3>{objetoPrueba.textoNovedad}</h3>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default NewsDetail;
