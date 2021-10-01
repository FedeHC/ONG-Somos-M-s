import React from 'react';
import { Form, Formik } from 'formik';





const Formnovedades = () => {
  return (
    <div>
    <Formik
      initialValues={{
        title: "",
        content: "",
        category:"",
        image:""
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form className="loginForm">

        </Form>
      )}
    </Formik>
  </div>
  );
}

export default Formnovedades;
