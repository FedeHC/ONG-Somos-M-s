import React from 'react';
import './404Page.scss';
import Denegado from './img/accesoDenegado.jpg';
import { Box, Text } from '@chakra-ui/react';

export default function Page404() {
  return (
    <Box className="fondoError">
      <Box className="error">
        <Box className="img">
          <img src={Denegado} alt="error!" width="150px" height="150px" />
        </Box>
        <Box>
          <Text fontSize="2xl">Error 404</Text>
          <Text fontSize="md">La pagina que estas buscando no existe</Text>
        </Box>
      </Box>
    </Box>
  );
}
