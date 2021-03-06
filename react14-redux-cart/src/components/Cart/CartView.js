import React from "react";
import s from "./Cart.module.css";

const Cart = ({ products = [], removeFromCart }) =>
  products.length > 0 ? (
    <table className={s.table}>
      <tbody>
        {products.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button>+</button>
              {amount}
              <button>-</button>
            </td>
            <td>
              <button onClick={() => removeFromCart(id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1> В корзине нет товаров! </h1>
  );

export default Cart;
