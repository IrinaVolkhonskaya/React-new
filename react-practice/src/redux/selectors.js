import { createSelector } from 'reselect';

//Menu
export const getMenuIds = state => state.menu.menuIds; //ids блюд
export const getMenuEntities = state => state.entities.menu;

export const getAllMenu = createSelector(
  [getMenuIds, getMenuEntities],
  (ids, entities) => ids.map(id => entities[id]),
);

//Category
export const getSelectedCategoryId = (state) => state.users.selectedCategory;
export const getAllMenuCategories = state => state.categories;

export const getMenuItemIds = createSelector(
  [getAllMenu], 
  (menu) =>
  menu.map(({ id }) => id),
);

export const getMenuWithSelectedCategory = createSelector(
  [getAllMenu, getSelectedCategoryId],
  (menu, selectedCategory) => menu.filter((menuItem) => menuItem.id === selectedCategory)
);

// export const getVisibleCategories = createSelector(
//   [getAllMenu, getAllMenuCategories],
//   (itemsName, category) =>
//     itemsName.filter(item => item.name.toLowerCase().includes(category)),
// );

//Filter
export const getFilter = state => state.menu.filter;

export const getVisibleItems = createSelector(
  [getAllMenu, getFilter],
  (itemsName, filter) =>
    itemsName.filter(item => item.name.toLowerCase().includes(filter)),
);

//Cart
const getCartMenuItemsIds = state => state.cart.ids;
const getCartMenuItemsAmounts = state => state.cart.amount;

export const getCartProductsAmount = createSelector(
  getCartMenuItemsIds,
  ids => ids.length,
);

export const getCartMenuItems = createSelector(
  [getCartMenuItemsIds, getCartMenuItemsAmounts, getMenuEntities],
  (ids, amounts, entities) =>
    ids.map(id => ({
      ...entities[id],
      amount: amounts[id],
    })),
);

export default {
  getMenuIds,
  getMenuEntities,
  getCartMenuItemsIds,
  getCartMenuItemsAmounts,
};
