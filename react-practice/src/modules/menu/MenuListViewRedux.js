import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import s from './MenuListView.module.css';
import { Button } from '@material-ui/core';

const MenuList = ({ menu, addToCart }) => {
  return (
    menu && (
      <ul>
        {menu.map(({ id, image, name, price }) => (
          <li key={id}>
            <img className={s.image} src={image} alt="" />
            <p>
              <b>{name}</b>
            </p>
            <p>Цена:{price} грн</p>

            <Link to={`${routes.MENU}/${id}`}>
            <Button variant="contained" color="primary" size="small">Детальнее</Button>
            </Link>

            <Button variant="contained" color="primary" size="small" onClick={() => addToCart(id)}>В корзину</Button>
            <hr />
          </li>
        ))}
      </ul>
    )
  );
};

export default MenuList;
