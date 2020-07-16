import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MenuPage from './components/MenuPage';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MenuPage />
  </React.StrictMode>,
  document.getElementById('root'),
);
