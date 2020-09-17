import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counterReducer';
import stepReducer from './stepReducer';

const rootReducer = combineReducers({
    counterValue: counterReducer,
    step: stepReducer
})

const enhancer = composeWithDevTools();

const store = createStore(rootReducer, enhancer);
// console.log(store.getState());

export default store;