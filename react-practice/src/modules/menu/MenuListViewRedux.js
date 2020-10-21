import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import s from './MenuListView.module.css';

const MenuList = ({ menu = [], addToCart }) =>
  menu.length > 0 ? (
    <ul>
      {menu.map(({ id, image, name, price }) => (
        <li key={id}>
          
            <img className={s.image} src={image} alt="" />
            <p>
              <b>{name}</b>
            </p>
            <p>Цена:{price} грн</p>
            
            <Link to={`${routes.MENU}/${id}`}>
            <button>Детальнее</button>
            </Link>
            <button onClick={() => addToCart(id)}>Добавить в корзину</button>
            <hr />
        
        </li>
      ))}
    </ul>
  ) : null;

export default MenuList;
