import { combineReducers } from "redux";
import types from "./noteActionTypes";

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.ADD:
      return [...state, payload]; //здесь payload - это объект

    case types.DELETE:
      return state.filter((item) => item.id !== payload); // здесь payload - это id

    case types.TOGGLE_COMPLETED:
      return state.map((item) =>
        item.id === payload ? { ...item, completed: !item.completed } : item
      );

    default:
      return state;
  }
}

function filterReducer(state = "", { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
