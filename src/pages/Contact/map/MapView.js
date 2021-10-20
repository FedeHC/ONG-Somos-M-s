import React from 'react';
import { MapContainer , TileLayer } from "react-leaflet";


const Mapview = () => {
 return (
  <div>
    <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  </div>
 );
}

export default Mapview;
