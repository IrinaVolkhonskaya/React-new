import React from 'react';
import MenuItemContainer from '../modules/menu/MenuItemContainer';

const MenuItemPage = ({match} ) => (
  <div>
    <h2>Menu Item page</h2>
    <MenuItemContainer id={match.params.id} />
  </div>
);

export default MenuItemPage;
