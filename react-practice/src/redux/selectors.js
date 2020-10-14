import { createSelector } from 'reselect';

//Menu
//const getMenuIds = state => state.menu; //ids блюд
const getMenuIds = state => state.menu.menuIds; //ids блюд
const getMenuEntities = state => state.entities.menu;

export const getAllMenu = createSelector(
  [getMenuIds, getMenuEntities],
  (ids, entities) => ids.map(id => entities[id]),
);


//Cart
const getCartMenuItemsIds = state => state.cart.ids;
const getCartMenuItemsAmounts = state => state.cart.amount;

export const getCartProductsAmount = createSelector(
  getCartMenuItemsIds,
  ids => ids.length,
);

export const getCartMenuTtems = createSelector(
  [getCartMenuItemsIds, getCartMenuItemsAmounts, getMenuEntities],
  (ids, amounts, entities) =>
    ids.map(id => ({
      ...entities[id],
      amount: amounts[id],
    })),
);

export default { getMenuIds, getMenuEntities };
