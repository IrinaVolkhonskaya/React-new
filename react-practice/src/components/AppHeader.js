import React from 'react';
import Logo from './Logo';
import AppNav from './AppNav';
import UserMenu from './UserMenu';

const AppHeader = () => (
  <div>
    <Logo />
    <br />
    <AppNav
      menu="Menu"
      about="About Us"
      contacts="Contacts"
      delivery="Delivery"
    />
    <UserMenu avatar="Avatar" userName="User Name" />
  </div>
);

export default AppHeader;
