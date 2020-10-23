import { combineReducers } from 'redux';
import { actionTypes } from '../actionsMenu';

function items(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_CATEGORIES:
      return payload;

    default:
      return state;
  }
}

  function selectedCategory(state = null, { type, payload }) {
    switch (type) {
        case actionTypes.SELECT_CATEGORY:
            return payload;

        default:
            return state;
    }
}

export default combineReducers({
  items,
  selectedCategory,
});
