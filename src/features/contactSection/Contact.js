import React from "react";
/* import Title from "./Title";
 */ import "./contact.scss";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

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
      <div className="container">
        <div id="info">
          <h1>Contactate con Nosotros!</h1>
          <h1>Nos interesa saber tu opinión sobre nuestras actividades!</h1>
          <ul className="list">
            <li>
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
        <div id="map">map</div>
        <div id="contactForm">form</div>
      </div>
    </>
  );
};

export default Contact;
