import React, { useState } from 'react';
import './Navbar.css';
import { RiMenuUnfoldLine, RiMenuFoldFill } from 'react-icons/ri';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>

    <div className="navbar">
      {menu === false ? (
          <RiMenuUnfoldLine className="icon" onClick={() => setMenu(!menu)} />
          ) : (
              <RiMenuFoldFill className="icon" onClick={() => setMenu(!menu)} />
              )}
     
    </div> 

    { menu === true ? (
        <div className="flex">
          <Sidebar setMenu={setMenu}/>
        </div>
      ) : null
    
    }
     
    </React.Fragment>
  );
};

export default Navbar;
