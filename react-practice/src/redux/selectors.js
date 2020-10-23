import { createSelector } from 'reselect';

//Menu
export const getMenuIds = state => state.menu.menuIds; //ids блюд
export const getMenuEntities = state => state.entities.menu;

export const getAllMenu = createSelector(
  [getMenuIds, getMenuEntities],
  (ids, entities) => ids.map(id => entities[id]),
);
//переход к рендеру одного артикула меню

// export const getMenuItemById = (state, id) => {
//   const menuItems = getAllMenu(state);
//   console.log(`menuItems`, menuItems);
//   return menuItems.find(menuItem => menuItem.id === id);
// };

//Category
export const getCategories = (state) => state.categories.items;// объекты категорий
export const getSelectedCategory = (state) => state.categories.selectedCategory;

export const getCategoryNames = createSelector(
  [getCategories],
  categories => categories.map(({ name }) => name),
);

export const getMenuWithSelectedCategory = createSelector(
  [getAllMenu, getSelectedCategory ],
  (menu, selectedCategory) => 
 
  menu.filter(item => item.category === selectedCategory),
);


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
