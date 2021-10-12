import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NewsDetail from './features/activities/detail/Detail';
import Ejemplo from './services/ejemplo';

function App() {
  return (
    <div className="App">
      <Ejemplo />
    </div>
  );
}

export default App;
