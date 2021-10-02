import React from 'react';
import { Form, Formik } from 'formik';



const Formcontact = () => {
 return (
  <div>
    <Formik
      initialValues={{
        
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form className="form-contact">
          
        </Form>
      )}
    </Formik>
   
  </div>
 );
}

export default Formcontact;
