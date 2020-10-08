import React from 'react';

import Logo from '../Logo/Logo';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';

import appLogo from './assets/logo.png';
import avatar from './assets/avatar.jpg';
import navItems from '../../configs/main-nav';

import s from './Appheader.module.css';

const AppHeader = () => (
  <header className={s.header}>
    <div className={s.logo}>
      <Logo image={appLogo} width={60} height={50} />
    </div>
    <Navigation items={navItems} />
    <div className={s.usermenu}>
      <UserMenu avatar={avatar} name="Katy Ross" />
    </div>
  </header>
);

export default AppHeader;
