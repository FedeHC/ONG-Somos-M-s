import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { FormProjects } from "./features/FormProjects/FormProjects";

function App() {
  return (
    <ChakraProvider>
      <FormProjects />
    </ChakraProvider>
  );
}

export default App;
