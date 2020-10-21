import React from 'react';
import s from './Cart.module.css';

const CartView = ({
  menuCart = [],
  removeFromCart,
  addToCart,
  decreaseFromCart,
}) => {
  // console.log(menuCart);
  return menuCart.length > 0 ? (
    <table className={s.table}>
      <tbody>
        {menuCart.map(({ id, name, amount, price }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button onClick={() => addToCart(id)}>+</button>
              {amount}
              <button onClick={() => decreaseFromCart(id)}>-</button>
            </td>
            <td>{price} грн</td>
            <td>
              <button onClick={() => removeFromCart(id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );
};

export default CartView;
