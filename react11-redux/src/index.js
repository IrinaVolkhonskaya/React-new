// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './component/App';

// ReactDOM.render(
//     <App />
//   document.getElementById('root')
// );

import { createStore } from "redux";

// console.dir(createStore);
const initialCounterState = 0;

const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

const reducer = (state = initialCounterState, action) => {
  console.log("From inside reducer:", action);

  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + action.payload;

    case ACTION_TYPES.DECREMENT:
      return state - action.payload;

    case ACTION_TYPES.RESET:
      return initialCounterState;

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

const incrementAction = (value) => ({
  type: ACTION_TYPES.INCREMENT,
  payload: value,
});

store.dispatch(incrementAction(5));
console.log(store.getState());

const decrementAction = (value) => ({
  type: ACTION_TYPES.DECREMENT,
  payload: value,
});
store.dispatch(decrementAction(7));
console.log(store.getState());

store.dispatch(decrementAction(10));
console.log(store.getState());

const resetAction = () => ({
  type: ACTION_TYPES.RESET,
});

store.dispatch(resetAction());
console.log(store.getState());
