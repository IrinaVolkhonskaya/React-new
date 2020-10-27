import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);
const enhancer = composeWithDevTools(middleware);

const store = createStore(rootReducer, enhancer);

export default store;
