import React from "react";
import './Title.css'; 

const Title = (props) => {
  return (
    <div className="titleDiv">
      <div className="textDiv">
        <h1>{props.text}</h1>
      </div>
      <div className="imageDiv">
        {props.image ? (
          <img src={props.image} />
        ) : (
          <img src="https://i.pinimg.com/736x/2c/ea/d4/2cead4a104fe1861928351a62c0fddad.jpg" />
        )}
      </div>
    </div>
  );
};

export default Title;