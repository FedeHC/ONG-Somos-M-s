import React, { useState } from "react";
import { Field, Form, Formik } from "formik";

const Newsletter = () => {

  const [newsletter, setNewsletter] = useState(false);   
  const item = localStorage.getItem("Newsletter"); 
  const isTrueSet = (item === "true"); 

  return (
    !isTrueSet ?   
    <div className="App">
    <h1>Newsletter</h1>
    <Formik
      initialValues={{email: ""}}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        localStorage.setItem("Newsletter", true)
        setNewsletter(true)
        alert('Te suscribiste al Newsletter');
      }}
    >
      <Form>
        <Field name="email" type="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div> : null

  );
};

export default Newsletter;
