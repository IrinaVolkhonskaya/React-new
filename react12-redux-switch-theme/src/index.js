import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/store';
import { switchTheme } from './redux/actions';
import { getThemeColor } from './redux/reducer';
import './styles.css';

const App = ({ themeColor, switchTheme }) => (
  <div className="app" style={{ backgroundColor: themeColor }}>
    <button className="button" onClick={switchTheme}>
      Switch Theme
    </button>
  </div>
);

const mstp = state => ({ themeColor: getThemeColor(state) });
const mdtp = { switchTheme };

const ConnectedApp = connect(mstp, mdtp)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'),
);
