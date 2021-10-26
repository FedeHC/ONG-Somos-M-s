import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import routes from './routes.js';
import 'animate.css';

const Sidebar = () => {
  return (
    <div className="sidebar animate__animated animate__backInLeft">
      <ul>
        {routes.map(route => (
          <Link to={route.path}>
            <li>{route.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
