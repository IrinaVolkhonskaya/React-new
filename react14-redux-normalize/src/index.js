import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import App from './components/App/App';
import './index.module.css';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

