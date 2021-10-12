import React from 'react';
import './App.css';
import { FormActivities } from "./features/FormActivities/FormActivities";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ActivitiesDetail />

      <ChakraProvider>
        <FormActivities />;
      </ChakraProvider>
    </div>
  );
}

export default App;
