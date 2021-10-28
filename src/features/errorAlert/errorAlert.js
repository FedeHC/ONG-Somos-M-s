import React from 'react';
import { Alert } from '@chakra-ui/react';

const errorAlert = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Oops! Ocurrió un error!</AlertTitle>
      <AlertDescription>Recarga la página por favor!</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
};

export default errorAlert;
