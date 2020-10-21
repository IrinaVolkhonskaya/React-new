import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import entityReducer from './entityReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  menu: menuReducer,
  entities: entityReducer,
  cart: cartReducer,
  categories: categoryReducer,
});

//state
//{
//menu: [1,2,3],
// entities: {
//     menu: {
//        1: {
//           id: 1,
//           name: 'суп',
//           price: 10
//     }
//   }
// }
//}