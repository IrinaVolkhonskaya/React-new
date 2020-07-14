import React from 'react';

const MenuItem = ({ image, name, price, description, ingredients }) => (
  <div key={id}>
    <img className="menuItem" src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>Price: {price}uah</p>
    <div>
      <div>Description: {description}</div>
      <div>Ingredients: {ingredients}</div>
    </div>
  </div>
);

export default MenuItem;
