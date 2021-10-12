import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NewsDetail from './features/activities/detail/Detail';
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
