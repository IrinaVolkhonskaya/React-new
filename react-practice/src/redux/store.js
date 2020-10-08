import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import entities from '../server/menu.json';

const enhancer = composeWithDevTools();

const preloadedState = {
    menuItems: Object.keys(entities.menuItems),
    entities: {...entities },
};

const store = createStore(rootReducer, preloadedState, enhancer);

export default store;