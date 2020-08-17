import React, { Component } from 'react';
import MenuGrid from '../modules/menu/MenuGrid';
import * as API from '../services/api';

export default class MenuPage extends Component {
  state = { menu: [], loading: false, error: null };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const menu = await API.getAllMenuItems();

      this.setState({ menu, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }
  render() {
    const { menu, loading, error } = this.state;

    return (
      <div>
        {/* <button type="button" onClick={this.handleAddMenuItem}>
          Добавить элемент меню
        </button> */}
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        <MenuGrid items={menu} />
      </div>
    );
  }
}
