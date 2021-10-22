import React, { useState } from 'react';
import { MapContainer , TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import Mark from './Mark';


const Mapview = (props) => {

 const [state, setState] = useState({
  currentLocation: props.address,
  zoom: 16,
  });

  const name = "SOMOS MAS";

 return (
  <div className="map-container">
    <MapContainer center={state.currentLocation} zoom={state.zoom} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Mark position={state.currentLocation} name={name} />
    </MapContainer>
  </div>
 );
}

export default Mapview;
