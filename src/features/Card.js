import React from 'react';

//style
import "./card.css";


//data example img , title and description
const datosApi ={
  image:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  title: "prueba de titulo",
  description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
}

const Card = () => {
  return (
    <div>
      <figure className="card">
      <img src={datosApi.image} alt={datosApi.title} />
      <figcaption>
        <h3>{datosApi.title}</h3>
        <p>
         {datosApi.description}
        </p>
      </figcaption>
    </figure>
    </div>
  );
}

export default Card;

