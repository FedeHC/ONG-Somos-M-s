import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import routes from './routes.js';
import 'animate.css';

const Sidebar = ({setMenu}) => {
  return (
    <div className="sidebar animate__animated animate__backInLeft">
      <ul>
        {routes.map(route => (
          <Link to={route.path}>
            <div onClick={() => {
              setMenu(false)
            }}> 
              <li>{route.name}</li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
