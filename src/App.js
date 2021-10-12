import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Approuter from "./routes/Approuter.js";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Approuter />
      </ChakraProvider>
    </div>
  );
}

export default App;