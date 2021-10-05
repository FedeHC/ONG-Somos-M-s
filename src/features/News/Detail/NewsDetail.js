import React from "react";
import Title from "./Title.js";
import { Grid, GridItem, Box, SimpleGrid } from "@chakra-ui/react";

const NewsDetail = (props) => {
  return (
    <>
      <Title text="Novedad 1" image="https://fondosmil.com/fondo/17010.jpg" />
      <SimpleGrid columns={2} spacing={30}>
        <Box bg="tomato" height="80px">
          imagen
        </Box>
        <Box bg="tomato" height="80px" padding="10px">
          <h1>Detalles de novedad</h1>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default NewsDetail;
