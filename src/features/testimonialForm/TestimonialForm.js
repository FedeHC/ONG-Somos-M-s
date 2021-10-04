import React from 'react';
import { Formik, Form, Field } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import testimonialSchema from '../../config/testimonialSchema';
import requestAxios from '../../helpers/requestAxios';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

function TestimonialForm({ testimonial }) {
  const templateInitialValues = {
    name: '',
    description: '',
    image: '',
  };
  const initialValues = testimonial ? testimonial : templateInitialValues;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={testimonialSchema}
      onSubmit={async (values) => {
        const methodHTTP = testimonial ? 'put' : 'post';
        const url = testimonial
          ? `/testimonials/${testimonial.id}`
          : '/testimonials';

        const response = await requestAxios(methodHTTP, url, values);
        console.log(response);
        alert(JSON.stringify(values))
      }}
    >
      {(formik) => {
        return (
          <Form>
            <Heading m={4}>Formulario de Testimonios</Heading>
            <Field mt={5} className='input' name='name'>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor='name'>Nombre: </FormLabel>
                  <Input
                    autoFocus
                    {...field}
                    id='name'
                    placeholder='Nombre'
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='description'>
              {({ field, form }) => (
                <FormControl
                  id='description'
                  isInvalid={
                    form.errors.description && form.touched.description
                  }
                >
                  <CKEditor
                    editor={ClassicEditor}
                    data={formik.values.description}
                    onChange={(e, editor) => {
                      const data = editor.getData();
                      formik.setFieldValue('description', data);
                    }}
                  />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field mt={5} className='input' name='image'>
              {({ form }) => (
                <FormControl
                  isInvalid={form.errors.image && form.touched.image}
                >
                  <FormLabel htmlFor='image'>Imagen</FormLabel>
                  <Input
                    id='image'
                    type='file'
                    onChange={(event) => {
                      const files = event.target.files;
                      let myFiles = Array.from(files);
                      formik.setFieldValue('image', myFiles[0]);
                    }}
                  />
                  <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button mt={4} colorScheme='teal' type='submit'>
              {testimonial ? 'Guardar Cambios' : 'Crear Testimonio'}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default TestimonialForm;
