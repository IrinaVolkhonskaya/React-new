import React, { Component } from "react";
import * as api from "../api-mock/api";

export default class MenuItemPage extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    imageUrl: null,
    price: null,
    category: null,
    // ingredients: null,
  };

  componentDidMount() {
    api
      .getMenuItemById(this.props.match.params.id)
      .then((menuItems) => this.setState({ ...menuItems }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    const { category } = this.state;

    if (state) {
      return this.props.history.push(state.from);
    }

    this.props.history.push({
      pathname: "/menu",
      search: `? category=${category}`,
    });
  };

  render() {
    const { name, description, imageUrl, price, category } = this.state;
    return (
      <article>
        <h2>{name}</h2>
        <img src={imageUrl} alt={name} width="300" height="200" />
        <p>
          <b>Price: {price}</b>
        </p>
        <p>
          <b>Category: {category}</b>
        </p>
        <p>Описание: {description}</p>
        <button type="button" onClick={this.handleGoBack}>
          Back to articles
        </button>
      </article>
    );
  }
}
