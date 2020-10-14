import React from 'react';
import s from './Cart.module.css';

const Cart = ({ menu = [] }) =>
  menu.length > 0 ? (
    <table className={s.table}>
      <tbody>
        {menu.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
              <button>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );

export default Cart;
