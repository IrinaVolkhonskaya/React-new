import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from './AppHeader/AppHeader';
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
import AccountPage from '../pages/Account';
import OrderHistoryPage from '../pages/OrderHistory';
import MealPlannerPage from '../pages/Planner';

import Auth from './Auth';
// import OrderHistory from './OrderHistory';
import MenuFilter from './MenuFilter';
// import Menu from './Menu';
import menuJson from '../menu.json';
// import FilterList from './FilterList';
import Modal from './Modal/Modal';
// import Tabs from './Tabs/Tabs';
// import tabsData from '../tabs.json';

import routes from '../configs/routes';

const filterMenu = (filter, menuJson) => {
  return menuJson.filter(menuItem =>
    menuItem.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
// console.log(`filterMenu:`, filterMenu);

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
    // console.log('filter:', filter);
    // const filteredMenu = filterMenu(filter, menuJson);

    return (
      <div>
        <h1>FOODY</h1>
        <AppHeader />

        <Switch>
          <Route exact path={routes.MENU} component={MenuPage} />
         <Route path={routes.MENU_ITEM} component={MenuItemPage} />
         <Route path={routes.ABOUT} component={AboutPage} />
          <Route path={routes.CONTACT} component={ContactPage} />
          <Route path={routes.DELIVERY} component={DeliveryPage} />
          <Route path={routes.ACCOUNT} component={AccountPage} />
          <Route path={routes.ORDER_HISTORY} component={OrderHistoryPage} />
          <Route path={routes.PLANNER} component={MealPlannerPage} />
        </Switch>

        <div>
          <button type="button" onClick={this.handleOpenModal}>
            Open Modal
          </button>
          {isModalOpen && (
            <Modal
              onClose={this.handleCloseModal}
              isModalOpen={this.state.isModalOpen}
            />
          )}
        </div>
        <br />
        <br />
        {/* <Tabs items={tabsData} />
        <br /> */}
        <Auth />
        <br />

        {/*  <OrderHistory /> */}
        <br />
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        {/* <FilterList menuJson={filteredMenu} /> */}
        <br />
        {/* <Menu /> */}
      </div>
    );
  }
}
