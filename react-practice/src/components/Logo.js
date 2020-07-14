import React from 'react';
import logo from '../images/logo.png';

const Logo = ({width = 60, height = 50}) => (
  <img className="logo" src={logo} alt="logo cafe" width={width} height={height} />
);

export default Logo;
