import React, { Component } from "react";
import * as api from "../server/api";
import MenuList from "../components/MenuList";
import CategorySelector from "../components/CategorySelector";
import categories from "../server/categories";
import queryString from "query-string";

const getCategoryFromProps = (props) =>
  queryString.parse(props.location.search).category;
// const categories = api.getCategories();
// console.log(`categories:, ${categories}`);

export default class MenuPage extends Component {
  state = {
    menuItems: [],
  };
  componentDidMount() {
    const category = getCategoryFromProps(this.props);

    if (!category) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: "category=all",
      });
    }
    api.getAllMenuItems().then((menuItems) => this.setState({ menuItems }));
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
