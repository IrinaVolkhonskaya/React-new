import React from 'react';

import avatar from '../../../components/AppHeader/assets/avatar.jpg';
import s from './Avatar.module.css';

type AvatarType = {
  width: number,
  height: number,
}


const Avatar = ({ width, height }: AvatarType) => (
  <img
    className={s.avatar}
    src={avatar}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
