import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { ChakraProvider } from "@chakra-ui/react";
import HomeForm from "./features/HomeForm/HomeForm.js";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <HomeForm />
    </ChakraProvider>
  );
}

export default App;
