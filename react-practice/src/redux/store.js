import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import entities from '../menu.json';

import rootReducer from './reducers';

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middleware);

// const preloadedState = {
//     menu: Object.keys(entities.menu.menuIds),
//     entities: {...entities},
// };

// const store =/= createStore(rootReducer, preloadedState, enhancer);

const store = createStore(rootReducer, enhancer);

export default store;
