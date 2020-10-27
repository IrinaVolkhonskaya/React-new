import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import s from './MenuListView.module.css';

const MenuList = ({menu, addToCart, viewItemMore }) => { 
  return menu && (
    <ul>
      {menu.map(({ id, image, name, price }) => (
        <li key={id}>
          
            <img className={s.image} src={image} alt="" />
            <p>
              <b>{name}</b>
            </p>
            <p>Цена:{price} грн</p>
            
            <Link to={`${routes.MENU}/${id}`}>
            <button 
            // onClick={viewItemMore(id)}
            >Детальнее</button>
            </Link>
            <button onClick={() => addToCart(id)}>Добавить в корзину</button>
            <hr />
        
        </li>
      ))}
    </ul>)}

export default MenuList;
