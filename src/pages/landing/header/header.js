import React from 'react';
import './header.css';
import Logo from '../../../features/assets/images/logo-campaña.png';
import LogoOng from '../../../features/assets/images/logo-ngo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logos">
        <img src={Logo} className="logo" />
        <img src={LogoOng} className="logoOng" />
        <p className="slogan">Back to school</p>
      </div>
    </div>
  );
};

export default Header;
