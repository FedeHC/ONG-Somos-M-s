import React from 'react';
import './content.css';
import Fondo from '../../../features/assets/images/fondo.png';
import Counter from './counter';

const Content = () => {
  return (
    <div className="content">
      <div className="info">
        <h1>¿Cuándo?</h1>
        <h3>10/4/2021</h3>
      </div>
      <div className="info">
        <h1>¿A qué hora?</h1>
        <h3>18:00 hs</h3>
      </div>
      <div className="info">
        <h1>¿Dónde?</h1>
        <h3>Escuela Don Orione.</h3>
      </div>
      <div className="counter">
        <Counter />
        <img src={Fondo} className="image" />
      </div>
    </div>
  );
};

export default Content;
