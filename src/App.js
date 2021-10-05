import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Title from './features/title/Title';

function App() {
  return (
    <div className="App">
     <Title text="Título" image="https://fondosmil.com/fondo/17010.jpg"/>
    </div>
  );
}

export default App;
