import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import s from './MenuListView.module.css';

const MenuList = ({ menu = [], addToCart }) =>
  menu.length > 0 ? (
    <ul>
      {menu.map(({ id, image, name, price }) => (
        <li key={id}>
          <Link to={`${routes.MENU}/${id}`}>
            <img className={s.image} src={image} alt=""></img>
            <p>
              <b>{name}</b>
            </p>
            <p>Цена:{price} грн</p>
            <button onClick={() => addToCart(id)}>Добавить в корзину</button>
            <hr />
          </Link>
        </li>
      ))}
    </ul>
  ) : null;

export default MenuList;
