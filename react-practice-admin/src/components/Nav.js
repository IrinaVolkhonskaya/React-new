import React from 'react'
import {NavLink } from "react-router-dom";

const styles = {
    activeLink: { color: "palevioletred", textDecoration: "none"},
  };
  
const Nav = () => (
    <ul>
    <li>
      <NavLink exact to="/" activeStyle={styles.activeLink}>
        HOME
      </NavLink>
    </li>
    <li>
      <NavLink to="/menu" activeStyle={styles.activeLink}>
        MENU
      </NavLink>
    </li>
  </ul>
);

export default Nav;