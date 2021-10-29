import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const ErrorAlert = () => {
  return (
    <Box
      height="50vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Alert w="60%" status="error">
        <AlertIcon mr={4} />
        <AlertTitle mr={2}>Oops! Ocurrió un error!</AlertTitle>
        <AlertDescription>Recarga la página por favor!</AlertDescription>
      </Alert>
    </Box>
  );
};

export default ErrorAlert;
