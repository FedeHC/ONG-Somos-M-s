import React from "react";
import {
  VStack,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

export const FormActivities = () => {
  const [value, setValue] = React.useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <VStack mt="2rem">
      <Container maxW="container.md" className="editFormCreationActivities">
        <FormControl mb="1rem" id="name" isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input placeholder="Nombre de actividad" />
        </FormControl>

        <Text mb="8px">Descripción: </Text>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Descripción de actividad"
          size="md"
          variant="outline"
          mb="1rem"
        />
        
        <FormControl mb="1rem" id="image" isRequired>
          <FormLabel>Imagen</FormLabel>
          <input type="file" accept=".png, .jpg" />
        </FormControl>
      </Container>
    </VStack>
  );
};
