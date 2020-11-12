import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default function AppHeader({ name }) {
  const dispatch = useDispatch();
  const user = useSelector(selectors.getUser);
  const isAuthenticated = useSelector(selectors.isAuthenticated);

  const onSignOut = () => dispatch(operations.signOut());

  return (
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
}
