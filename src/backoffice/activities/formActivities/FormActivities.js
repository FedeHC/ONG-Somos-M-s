import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  Center,
  Box,
  Heading,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import { showActivities as getActivities } from '../../../services/apiActivities';
import {
  createActividad,
  editActividad,
} from '../../../app/actividades/actividadesReducer';
import { /* questionAlert, */ successAlert } from '../../../features/alert/alert';
import { useDispatch } from 'react-redux';

const FormActivities = ({history}) => {
  const dispatch = useDispatch();
  // STATE
  const [response, setResponse] = useState([]);
  const [selectedFile, setSelectedFile] = useState();

  // ID & URL
  const { id } = useParams(); // Get id if exists in URL, otherwise null/undefined.
  const location = useLocation().pathname.toLocaleLowerCase();

  // ACTIVITIES ARRAY/OBJECT
  useEffect(() => {
    const fetchData = async () => {
      const result = await getActivities(id);
      setResponse(result.data?.data);
    };
    fetchData();
  }, [id]);

  // HANDLER
  const submitHandler = values => {
    if (location.includes('create')) {
      values.created_at = "2021-11-04T16:52:26.000000Z";
      values.image = URL.createObjectURL(selectedFile);
      values.id = values.name;
      dispatch(createActividad(values));
      successAlert();
    } else if (location.includes('edit')) {
      const objNew = response;
      objNew.name = values.name;
      objNew.description = values.description;
      objNew.image = typeof(values.image) === "string" ? values.image : URL.createObjectURL(selectedFile);
      dispatch(editActividad(objNew));
      successAlert();
    }
    history.push("/backoffice/activities");
  };

  // FORM TITLE
  const formTitle = () => {
    if (location.includes('create')) return 'Creando';
    else if (location.includes('edit')) return 'Editando';
    else return '';
  };

  // SCHEMA
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Requerido')
      .min(3, 'Se requieren 3 caracteres como mínimo'),
    description: Yup.string().required('Requerido'),
  });

  // INITIAL FORMIK VALUES
  const initialValues = {
    name: response?.name || '',
    description: response?.description || '',
    image: response?.image || '',
  };

  return (
    <Center>
      {/* FORMIK */}
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={formSchema}
        onSubmit={values => submitHandler(values)}
      >
        {formik => (
          // FORM
          <Form>
            <Container>
              <Box
                width="xl"
                mt={20}
                mb={20}
                p={10}
                borderRadius={10}
                boxShadow="dark-lg"
              >
                {/* TITLE */}
                <Center bg="#00214d" mt={0} mb={10} p={3} borderRadius={10}>
                  <Heading size="xl" color="white">
                    {formTitle()} Actividad
                  </Heading>
                </Center>

                {/* NAME INPUT */}
                <Field name="name">
                  {({ field, form }) => (
                    <>
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                        mb={5}
                      >
                        <FormLabel htmlFor="name">Nombre:</FormLabel>
                        <Input {...field} variant="flushed" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    </>
                  )}
                </Field>

                {/* DESCRIPTION INPUT */}
                <Field name="description" mt={5}>
                  {({ form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.description && form.touched.description
                      }
                      mb={5}
                    >
                      <FormLabel htmlFor="description">Descripción:</FormLabel>
                      <CKEditor
                        editor={ClassicEditor}
                        data={formik.values.description}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          formik.setFieldValue('description', data);
                        }}
                      />
                      <FormErrorMessage>
                        {form.errors.description}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* IMAGE INPUT */}
                <Field name="image">
                  {({ form }) => (
                    <FormControl
                      isInvalid={form.errors.image && form.touched.image}
                      mb={5}
                    >
                      <FormLabel>Imagen:</FormLabel>
                      <Input
                        id="image"
                        type="file"
                        variant="flushed"
                        onChange={event => {
                          const files = event.target.files;
                          let myFiles = Array.from(files);
                          form.setFieldValue('image', myFiles[0]);
                          setSelectedFile(myFiles[0]);
                        }}
                      />
                    </FormControl>
                  )}
                </Field>
                {selectedFile && (
                  <img src={URL.createObjectURL(selectedFile)} alt="Imagen del archivo" />
                )}
                {!selectedFile && <img src={response?.image} alt="Imagen del archivo" />}
                {/* SEND BUTTON */}
                <Button
                  mt={4}
                  mb={10}
                  width="100%"
                  colorScheme="blue"
                  bg="#00214d"
                  type="submit"
                >
                  Enviar
                </Button>
              </Box>
            </Container>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default FormActivities;
