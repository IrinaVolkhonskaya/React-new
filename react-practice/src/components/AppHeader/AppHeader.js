import React from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo/Logo';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../Auth/AuthNav';
import CartIcon from '../../modules/cart/CartIconContainer';
import appLogo from './assets/logo.png';
import avatar from './assets/avatar.jpg';
import navItems from '../../configs/main-nav';

import * as selectors from '../../redux/userSelectors';
import * as operations from '../../redux/authOperations';

import s from './Appheader.module.css';

const AppHeader = ({ isAuthenticated, name, user, onSignOut }) => (
  <header className={s.header}>
    <div className={s.logo}>
      <Logo image={appLogo} width={60} height={50} />
    </div>
    <Navigation items={navItems} />
    {isAuthenticated ? <CartIcon isAuthenticated={isAuthenticated} /> : null}
    <div className={s.usermenu}>
      {isAuthenticated ? (
        <UserMenu
          isAuthenticated={isAuthenticated}
          avatar={avatar}
          onSignOut={onSignOut}
          user={user}
          name={name}
        />
      ) : (
        <AuthNav />
      )}
    </div>
  </header>
);

const mapState = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
  user: selectors.getUser(state),
});

const mapDispatch = {
  onSignOut: operations.signOut,
};

export default connect(mapState, mapDispatch)(AppHeader);
