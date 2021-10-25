import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import './Backoffice.css'; 

const Backoffice = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default Backoffice;
