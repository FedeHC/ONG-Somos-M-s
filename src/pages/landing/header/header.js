import React from 'react';
import './header.css';
import Logo from '../../../features/assets/images/logo-campaña.png';
import LogoOng from '../../../features/assets/images/logo-ngo.png';
import ToyLogo from '../content/ToyLogo.png';

const Header = ({ title, logo }) => {
  return (
    <div className="header">
      <div className="logos">
        <img
          src={logo === 'school' ? Logo : ToyLogo}
          className="headerLogo"
          alt="Logo"
        />
        <img src={LogoOng} className="headerLogoOng" alt="Logo ONG" />
        <p className="slogan">{title}</p>
      </div>
    </div>
  );
};

export default Header;
