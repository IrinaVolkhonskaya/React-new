import React, { lazy, Suspense, Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import AppHeader from './components/AppHeader/AppHeader';
import Loader from './components/Loader/Loader';
import * as operations from './redux/authOperations';

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

const AsyncCartPage = lazy(() =>
  import('./pages/Cart' /*webpackChunkName: "cart-page"*/),
);

const AsyncSignInPage = lazy(() =>
  import('./pages/SignIn' /*webpackChunkName: "signIn-page"*/),
);

const AsyncSignUpPage = lazy(() =>
  import('./pages/SignUp' /*webpackChunkName: "signUp-page"*/),
);

class App extends Component {
  // state = {
  // isModalOpen: false,
  // };
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

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
            <PublicRoute exact path={routes.MENU} component={AsyncMenuPage} />
            <PublicRoute
              path={routes.MENU_ITEM}
              component={AsyncMenuItemPage}
            />
            <PublicRoute path={routes.ABOUT} component={AsyncAboutPage} />
            <PublicRoute path={routes.CONTACT} component={AsyncContactPage} />
            <PublicRoute path={routes.DELIVERY} component={AsyncDeliveryPage} />
            <ProtectedRoute
              path={routes.ACCOUNT}
              component={AsyncAccountPage}
            />
            <ProtectedRoute
              path={routes.ORDER_HISTORY}
              component={AsyncOrderHistoryPage}
            />
            <ProtectedRoute path={routes.CART} component={AsyncCartPage} />
            <PublicRoute
              path={routes.SIGNIN}
              restricted
              component={AsyncSignInPage}
            />
            <PublicRoute
              path={routes.SIGNUP}
              restricted
              component={AsyncSignUpPage}
            />
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
      </div>
    );
  }
}

export default connect(null, {
  refreshCurrentUser: operations.refreshCurrentUser,
})(App);
