import React, { Component } from "react";
import * as api from "../server/api";

export default class MenuItemPage extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    imageUrl: null,
    price: null,
    category: null,
    ingredients: null,
  };

  componentDidMount() {
    api
      .getMenuItemById(this.props.match.params.id)
      .then((menuItem) => this.setState({ ...menuItem }));
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
    const {
      name,
      description,
      image,
      price,
      category,
      ingredients,
    } = this.state;
    return (
      <article>
        <button type="button" onClick={this.handleGoBack}>
          Назад к меню
        </button>
        <h2>{name}</h2>
        <img src={image} alt={name} width="100" height="50" />
        <p>
          <b>Цена: {price}грн</b>
        </p>
        <p>
          <b>Категория: {category}</b>
        </p>
        <p>Описание: {description}</p>
        <p>Ингредиенты: {ingredients}</p>
        
      </article>
    );
  }
}
