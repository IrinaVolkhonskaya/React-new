import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from './components/AppHeader/AppHeader';
import Loader from './components/Loader/Loader';

// import Auth from './Auth/Auth';
// import Modal from './Modal/Modal';
// import Tabs from './Tabs/Tabs';
// import tabsData from './components/Tabs/tabs.json';

import routes from './configs/routes';

const AsyncMenuPage = lazy(() =>
  import('./pages/Menu' /*webpackChunkName: "menu-page"*/),
);

const AsyncMenuItemPage = lazy(() =>
  import('./pages/MenuItem' /*webpackChunkName: "menuItem-page"*/),
);
const AsyncAboutPage = lazy(() =>
  import('./pages/About' /*webpackChunkName: "about-page"*/),
);
const AsyncContactPage = lazy(() =>
  import('./pages/Contact' /*webpackChunkName: "contact-page"*/),
);
const AsyncDeliveryPage = lazy(() =>
  import('./pages/Delivery' /*webpackChunkName: "delivery-page"*/),
);
const AsyncAccountPage = lazy(() =>
  import('./pages/Account' /*webpackChunkName: "account-page"*/),
);
const AsyncOrderHistoryPage = lazy(() =>
  import('./pages/OrderHistory' /*webpackChunkName: "orderHistory-page"*/),
);
const AsyncMealPlannerPage = lazy(() =>
  import('./pages/Planner' /*webpackChunkName: "mealPlanner-page"*/),
);
const AsyncCartPage = lazy(() =>
  import('./pages/Cart' /*webpackChunkName: "cart-page"*/),
);

class App extends Component {
  state = {
    // isModalOpen: false,
  };
  // componentDidMount() {
  //   this.props.fetchMenuRequest(menu);// нужно забрать с бекенда
  // }

  // handleOpenModal = () => {
  //   this.setState({ isModalOpen: true });
  // };

  // handleCloseModal = () => {
  //   this.setState({ isModalOpen: false });
  // };

  render() {
    // const { isModalOpen } = this.state;

    return (
      <div>
        <h1>FOODY LOVE</h1>
        <AppHeader />
        <Switch>
          <Suspense fallback={Loader}>
            <Route exact path={routes.MENU} component={AsyncMenuPage} />
            <Route path={routes.MENU_ITEM} component={AsyncMenuItemPage} />
            <Route path={routes.ABOUT} component={AsyncAboutPage} />
            <Route path={routes.CONTACT} component={AsyncContactPage} />
            <Route path={routes.DELIVERY} component={AsyncDeliveryPage} />
            <Route path={routes.ACCOUNT} component={AsyncAccountPage} />
            <Route
              path={routes.ORDER_HISTORY}
              component={AsyncOrderHistoryPage}
            />
            <Route path={routes.CART} component={AsyncCartPage} />
            <Route path={routes.PLANNER} component={AsyncMealPlannerPage} />
          </Suspense>
        </Switch>

        {/* <div> */}
        {/* <button type="button" onClick={this.handleOpenModal}>
            Open Modal
          </button>
          {isModalOpen && (
            <Modal
              onClose={this.handleCloseModal}
              isModalOpen={this.state.isModalOpen}
            />
          )} */}
        {/* </div> */}

        {/* <Tabs items={tabsData} />
        <br /> */}
        {/* <Auth /> */}
      </div>
    );
  }
}

export default App;
