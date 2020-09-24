import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { createLogger} from 'redux-logger';
import thunk from 'redux-thunk'; 

import rootModule from '../modules/rootModule';

// thunk - обычная прослойка, которая смотрит, если тип action - это функция (а не объект), то она ее вызывает, прокидывает dispatch и getState), если это не функция, она просто передает по цепочке дальше.
// const thunk = ({ dispatch, getState }) => next => action =>
// typeof action === 'function' ? action(dispatch, getState) : next(action);

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middleware);

const store = createStore (rootModule, enhancer);

export default store;