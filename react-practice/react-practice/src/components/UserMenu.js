import React from 'react';

const UserMenu = ({ avatar, userName, width = 60, height = 60 }) => (
  <div>
    <img
      className="avatar"
      src={avatar}
      alt="user avatar"
      width={width}
      height={height}
    />
    <div className="userName">{userName}</div>
  </div>
);

export default UserMenu;
