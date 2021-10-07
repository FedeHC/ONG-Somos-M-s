import React from "react";
import Title from "./Title";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <Title text="Contacto" />
      <div className="container">
        <div id="info">
          <h1>Contactate con Nosotros!</h1>
          <h1>Nos interesa saber tu opinión sobre nuestras actividades!</h1>
        </div>
        <div id="map">map</div>
        <div id="contactForm">form</div>
      </div>
    </>
  );
};

export default Contact;
