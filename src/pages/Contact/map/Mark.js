import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Marker, Popup } from "react-leaflet";
import { IoLocationSharp } from "react-icons/io5";
import { divIcon } from "leaflet";

const Mark = (props) => {

 const iconMarkup = renderToStaticMarkup(< IoLocationSharp  />);
    const customMarkerIcon = divIcon({
      html: iconMarkup,
    });


  return (
    <Marker position={props.position} icon={customMarkerIcon} >
      <Popup>{props.name}</Popup>
    </Marker>
  );
};

export default Mark;
