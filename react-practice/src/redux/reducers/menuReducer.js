import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

function menuReducer(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_MENU_SUCCESS:
      return payload;

    default:
      return state;
  }
}

function loadingReducer(state = false, { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_MENU_REQUEST:
      return true;
    case actionTypes.FETCH_MENU_SUCCESS:
    case actionTypes.FETCH_MENU_ERROR:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_MENU_REQUEST:
      return null;

    case actionTypes.FETCH_MENU_ERROR:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  menu: menuReducer,
  loading: loadingReducer,
  error: errorReducer,
});
