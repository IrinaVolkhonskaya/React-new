import React, { Component } from 'react';
import Auth from './Auth';
import AppHeader from './AppHeader/AppHeader';
import OrderHistory from './OrderHistory';
import MenuFilter from './MenuFilter';
// import Menu from './Menu';
import menuJson from '../menu.json';
// import FilterList from './FilterList';
import Modal from './Modal/Modal';

const filterMenu = (filter, menuJson) => {
  return menuJson.filter(menuItem =>
    menuItem.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

console.log(`filterMenu:`, filterMenu);

export default class App extends Component {
  state = {
    filter: '',
    menuJson,
    isModalOpen: false,
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { menuJson, filter, isModalOpen } = this.state;
    console.log('filter:', filter);
    // const filteredMenu = filterMenu(filter, menuJson);

    return (
      <div>
        <h1>FOODY</h1>
        <AppHeader />
        <button type="button" onClick={this.handleOpenModal}>
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={this.handleCloseModal} />}
        <br />
        <Auth />
        <br />
        <OrderHistory />
        <br />
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        {/* <FilterList menuJson={filteredMenu} /> */}
        <br />
        {/* <Menu /> */}
      </div>
    );
  }
}
