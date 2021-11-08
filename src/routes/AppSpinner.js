import React from 'react';
import { Flex } from '@chakra-ui/react';
import { CircularProgress } from '@chakra-ui/react';

const AppSpinner = () => {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <CircularProgress isIndeterminate color="linkedin.300" />
    </Flex>
  );
};

export default AppSpinner;
