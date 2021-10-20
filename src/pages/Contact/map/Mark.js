import React from "react";
import { Marker, Popup } from "react-leaflet";

const Mark = (props) => {
  return (
    <Marker position={props.position} >
      <Popup>{props.name}</Popup>
    </Marker>
  );
};

export default Mark;
