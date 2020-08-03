import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import MenuPage from './components/MenuPage';
import MenuPage from './components/MenuPage';
import OrdersPage from './components/OrdersPage';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MenuPage />
    <OrdersPage />
      </React.StrictMode>,
  document.getElementById('root'),
);
