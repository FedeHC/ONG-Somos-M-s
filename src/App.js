import React from 'react';
import './App.css';
import Slides from './features/slides/Slides';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (

    <ChakraProvider>
      <Slides />
    </ChakraProvider>
    
   
  );
}

export default App;