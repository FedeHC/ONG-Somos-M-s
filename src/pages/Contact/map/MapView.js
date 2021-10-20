import React, { useState } from 'react';
import { MapContainer , TileLayer } from "react-leaflet";


const Mapview = () => {

 const [state, setState] = useState({
  currentLocation:[51.505, -0.09],
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
