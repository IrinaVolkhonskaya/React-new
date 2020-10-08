import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
// import MenuPage from './modules/menu/MenuPage';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />

    {/* <MenuPage /> */}
  </BrowserRouter>,
  document.getElementById('root'),
);
