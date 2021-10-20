import React, { useState } from 'react';
import { MapContainer , TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";


const Mapview = (props) => {

 const [state, setState] = useState({
  currentLocation: props.address,
  zoom: 16,
  });

 return (
  <div className="map-container">
    <MapContainer center={state.currentLocation} zoom={state.zoom} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  </div>
 );
}

export default Mapview;
