import React from "react";
import { Link, withRouter } from "react-router-dom";

const MenuList = ({ menuItems, match, location }) => (
  <ul>
    {menuItems.map((menuItem) => (
      <li key={menuItem.id}>
        <Link
          to={{
            pathname: `${match.url}/${menuItem.id}`,
            state: { from: location },
          }}
        >
          <hr />

          <img
            src={menuItem.image}
            alt={menuItem.name}
            width="200"
            height="150"
          />
          <p>{menuItem.name}</p>
          <p>Цена: {menuItem.price}uah</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(MenuList);
