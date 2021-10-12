import React from "react";
import Title from "./Title.js";
import { Box, SimpleGrid, Divider } from "@chakra-ui/react";
import "./NewsDetail.scss";

const NewsDetail = (props) => {
  let objetoPrueba = {
    titulo: "novedad numero 7",
    textoNovedad:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis, nisi vel laoreet condimentum, velit lacus aliquet lectus, non finibus enim turpis id augue. Sed venenatis sapien ac justo porttitor euismod. Phasellus lobortis eu justo ac euismod. Vivamus at metus et sapien malesuada aliquam ac eget odio. Pellentesque quis varius urna. ",
    imagen:
      "https://educowebmedia.blob.core.windows.net/educowebmedia/educospain/media/images/blog/ong-y-ods.jpg",
  };
  return (
    <>
      <Title
        text={objetoPrueba.titulo}
        /*         image="https://fondosmil.com/fondo/17010.jpg"
         */
      />
      <SimpleGrid
        columns={1}
        minChildWidth="250px"
        spacing={50}
        margin={20}
        className="simpleGrid"
      >
        <Box height="100%" padding="10px">
          <img src={objetoPrueba.imagen} className="newsImage" alt="" />
        </Box>
        <Box padding="10px">
          <div className="newsText">
            <p className="title">Detalles de novedad</p>
            <Divider />
            <p className="content">{objetoPrueba.textoNovedad}</p>
          </div>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default NewsDetail;
