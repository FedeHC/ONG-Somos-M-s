import React from "react";
import "./contact.scss";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import FormContact from "../../features/counter/form contacto/FormContact";
import Title from "../../features/title/Title";

const Contact = () => {
  let objeto = {
    mail: "somosfundacionmas@gmail.com",
    instagram: "SomosMas",
    facebook: "SomosMas",
    phone: 111232312,
    linkedin: "somosMas",
    twitter: "SomosMas",
  };
  return (
    <>
      <Title text="Contacto" />

      <div className="container">
        <div id="info">
          <p className="listTitle">Envianos un mensaje</p>
          <h1>Nos interesa saber tu opinión sobre nuestras actividades!</h1>
          <ul className="list">
            <li className="listItem">
              <FaFacebookSquare className="facebook" />
              Facebook: www.facebook.com/{objeto.facebook}
            </li>
            <li>
              <GrInstagram className="instagram" />
              Instagram: www.instagram.com/{objeto.instagram}
            </li>
            <li>
              <FiMail className="mail" />
              Mail: {objeto.mail}
            </li>
            <li>
              <FaPhoneAlt className="phone" /> Telefono: {objeto.phone}
            </li>
          </ul>
        </div>
        <div id="map">
          <h1>Encuentranos en un mapa!</h1>
          <h1>Espacio reservado para el mapa</h1>
        </div>
        <div id="contactForm">
          <FormContact />
        </div>
      </div>
    </>
  );
};

export default Contact;
