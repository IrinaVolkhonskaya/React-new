import { createAction } from '@reduxjs/toolkit';

//удпалить после того, как редьюсеры подключим
export const actionTypes = {
  ADD_TO_CART: 'cart/ADD_TO_CART',
  REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
  DECREASE_FROM_CART: 'cart/DECREASE_FROM_CART',
};

export const addToCart = createAction('cart/ADD_TO_CART', id => {
  return {
    payload: {
      id,
    },
  };
});
//console.log(addToCart(1))

export const removeFromCart = createAction(
    'cart/REMOVE_FROM_CART',
  id => {
    return {
      payload: {
        id,
      },
    };
  },
);

export const decreaseFromCart = createAction(
  'cart/DECREASE_FROM_CART',
  id => {
    return {
      payload: {
        id,
      },
    };
  },
);
