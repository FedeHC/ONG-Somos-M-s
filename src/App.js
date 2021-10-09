import React from "react";
import "./App.css";
import Gracias from "./pages/gracias";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Gracias />
      </ChakraProvider>
    </div>
  );
}

export default App;
