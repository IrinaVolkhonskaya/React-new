import React from 'react';
import CategorySelectorContainer from '../modules/menu/CategorySelectorContainer';
import MenuContainer from '../modules/menu/MenuContainerRedux';
import MenuFilterContainer from '../modules/menu/MenuFilterContainer';

const MenuPage = () => (
  <div>
    <CategorySelectorContainer />
    <MenuFilterContainer />
    <MenuContainer />
  </div>
);

export default MenuPage;
