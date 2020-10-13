import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
// import entities from '../menu.json';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middleware);

// const preloadedState = {
//     menuItems: Object.keys(entities.menuItems),
//     entities: {...entities },
// };

// const store = createStore(rootReducer, preloadedState, enhancer);
const store = createStore(rootReducer, enhancer);
// console.log(`store:`, store)

export default store;
