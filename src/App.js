import React from "react";
import "./App.css";
import { FormActivities } from "./features/FormActivities/FormActivities";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <FormActivities />;
    </ChakraProvider>
  );
}

export default App;
