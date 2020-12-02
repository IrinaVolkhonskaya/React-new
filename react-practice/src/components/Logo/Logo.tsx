import React from "react";
import logo from "../AppHeader/assets/logo.png";

type LogoPropsType = {
  width: number,
  height: number,
}

const Logo: React.FC<LogoPropsType> = ({ width, height}) => (
  <img
    className="logo"
    src={logo}
    alt="logo cafe"
    width={width}
    height={height}
  />
);

export default Logo;
