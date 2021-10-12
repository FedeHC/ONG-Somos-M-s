import React from 'react';
import './App.css';
import { FormActivities } from "./features/FormActivities/FormActivities";
import Slides from './features/slides/Slides';
import { ChakraProvider } from "@chakra-ui/react";
import CategoriesBackOffice from './pages/categoriesBackOffice';

function App() {
  return (
    <div className="App">
      {/* <ActivitiesDetail /> */}

      <ChakraProvider>
        <CategoriesBackOffice />
      </ChakraProvider>
    </div>
  );
}

export default App;