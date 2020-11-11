import React from 'react';
import OrderItem from './OrderItem';
import s from './Orders.module.css';

const Orders = ({ items, onDelete, onShowMoreInfo }) => (
  <table className={s.table}>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>
            <OrderItem
              date={item.date}
              price={item.price}
              address={item.address}
              rating={item.rating}
              onShowMoreInfo={() => onShowMoreInfo(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Orders;
