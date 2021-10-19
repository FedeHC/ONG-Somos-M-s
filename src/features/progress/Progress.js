import React from "react";
import { Progress, ChakraProvider, Box } from "@chakra-ui/react";

function ProgressBar() {
  return (
    <Box p={4} w="50%">
      <Progress isIndeterminate hasStripe size="md" />
    </Box>
  );
}

export default ProgressBar;
