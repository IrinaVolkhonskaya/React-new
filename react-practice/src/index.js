import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
// import MenuPage from './components/MenuPage';
import MenuPage from './components/MenuPage';
import OrdersPage from './components/OrdersPage';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />

    {/* <MenuPage />
    <OrdersPage /> */}
  </BrowserRouter>,
  document.getElementById('root'),
);
