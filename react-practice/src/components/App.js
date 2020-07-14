import React, { Component } from 'react';
import Auth from './Auth';
import AppHeader from './AppHeader';
import OrderHistory from './OrderHistory';
import MenuFilter from './MenuFilter';
// import Menu from './Menu';
import menuJson from '../menu.json';
import FilterList from './FilterList';

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
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { menuJson, filter } = this.state;
    console.log('filter:', filter);
    const filteredMenu = filterMenu(filter, menuJson);

    return (
      <div>
        <h1>FOODY</h1>
        <AppHeader />
        <br />
        <Auth />
        <br />
        <OrderHistory />
        <br />
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <FilterList menuJson={filteredMenu} />
        <br />
        {/* <Menu /> */}
      </div>
    );
  }
}
