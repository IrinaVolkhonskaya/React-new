import { combineReducers } from 'redux';
import { actionTypes } from '../actionsMenu';

function menuItemsReducer(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_MENU_SUCCESS:
      return payload.ids.menu;
    default:
      return state;
  }
}


// function menuItemReducer(state = '', { type, payload }) {
//   switch (type) {
//     case actionTypes.GET_MENU_ITEM_BY_ID:
//       return payload.ids.menu.id;
//     default:
//       return state;
//   }
// }


function loadingReducer(state = false, { type}) {
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

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  menuIds: menuItemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
  // idItem: menuItemReducer,
});
