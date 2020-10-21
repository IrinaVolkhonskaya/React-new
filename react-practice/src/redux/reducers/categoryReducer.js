import { combineReducers} from 'redux';
import { actionTypes } from '../actionsMenu';

// function items(state = [], { type, payload }) {
//   switch (type) {
//     case actionTypes.FETCH_MENU_REQUEST:// прописать экшн
//       return payload.categories;

//     default:
//       return state;
//   }
// }

function selectedCategory(state = null, { type, payload }) {
  switch (type) {
    case actionTypes.SELECT_USER:
      return payload;

    default:
      return state;
  }
}
 
export default combineReducers({
    // items,
    selectedCategory,
});