import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

type ItemType = {
  name: string,
  path: string,
}

type NavigationType = {
  items: Array<ItemType>,
}


const Navigation: React.FC<NavigationType> = ({ items = [] } ) => (
  <ul className={s.nav}>
    {items.map(item => (
      <li key={item.name}>
        <NavLink to={item.path} className={s.link} activeClassName={s.activeLink}>
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);


export default Navigation;
