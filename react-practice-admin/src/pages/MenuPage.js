import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import * as api from "../server/api";
import categories from "../server/categories";
import queryString from "query-string";

import MenuList from "../components/MenuList";
import CategorySelector from "../components/CategorySelector";

const styles = {
  activeLink: { color: "palevioletred", textDecoration: "none" },
};

const getCategoryFromProps = (props) =>
  queryString.parse(props.location.search).category;

export default class MenuPage extends Component {
  state = {
    menuItems: [],
  };
  componentDidMount() {
    const category = getCategoryFromProps(this.props);

    if (!category) {
      return api
        .getAllMenuItems()
        .then((menuItems) => this.setState({ menuItems }));
    }

    api
      .getMenuItemsWithCategory(category)
      .then((menuItems) => this.setState({ menuItems }));
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;

    api
      .getMenuItemsWithCategory(nextCategory)
      .then((menuItems) => this.setState({ menuItems }));
  }

  handleCategoryChange = (category) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { menuItems } = this.state;

    const currentCategory = getCategoryFromProps(this.props);

    return (
      <div>
        <NavLink to="/menu/add" activeStyle={styles.activeLink}>
          Добавить элемент меню
        </NavLink>
        <hr />
        <h1>Menu</h1>
        <CategorySelector
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <MenuList menuItems={menuItems} />
      </div>
    );
  }
}
