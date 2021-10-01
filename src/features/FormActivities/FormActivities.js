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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./FormActivities.css";

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
        <CKEditor
          editor={ClassicEditor}
          data="<p></p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />

        <FormControl mt="1rem" mb="1rem" id="image" isRequired>
          <FormLabel>Imagen</FormLabel>
          <input type="file" accept=".png, .jpg" />
        </FormControl>
      </Container>
    </VStack>
  );
};
