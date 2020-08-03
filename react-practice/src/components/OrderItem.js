import React from 'react';

const OrderItem = ({
  id,
  date,
  price,
  address,
  rating,
  onShowMoreInfo,
  onDelete,
}) => (
  <div>
    <tr key={id} >
      <td>Date: {date}</td>
      <td>Price: {price}</td>
      <td>Address: {address}</td>
      <td>Rating: {rating}</td>
      <td>
        <button type="button" onClick={onShowMoreInfo}>
          Детальнее
        </button>
      </td>
      <td>
        <button type="button" onClick={onDelete}>
          Удалить
        </button>
      </td>
    </tr>
  </div>
);

export default OrderItem;
