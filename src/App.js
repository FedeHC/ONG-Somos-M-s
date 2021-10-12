import React from 'react';
import './App.css';
import { FormActivities } from "./features/FormActivities/FormActivities";
import Slides from './features/slides/Slides';
import { ChakraProvider } from "@chakra-ui/react";
import Members from './features/about/Members';

function App() {
  return (
    <div className="App">
      {/* <ActivitiesDetail /> */}

      <ChakraProvider>
        {/* <FormActivities />; */}
        <Members />
      </ChakraProvider>
    </div>
  );
}

export default App;