import React from "react";
import UserForm from "./features/UserForm";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <UserForm />
      </ChakraProvider>
    </div>
  );
}

export default App;
