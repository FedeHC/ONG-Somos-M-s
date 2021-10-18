import React from 'react';
import PropTypes from 'prop-types';
//style
import "./card.css";


//data example img , title and description
const datosApi ={
  image:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  title: "prueba de titulo",
  description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
}

const Card = (props) => {

  return (
    <div>
      <figure className="card">
      <img src={props.image} alt={datosApi.title}
        onError={(e)=>{e.target.onerror = null; e.target.src=`https://via.placeholder.com/2000/fff0f0/00000/?text=SomosMas.com`}}
       />
      <figcaption>
        <h3>{props.title}</h3>
        <p>
         {props.description}
        </p>
      </figcaption>
    </figure>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string
};