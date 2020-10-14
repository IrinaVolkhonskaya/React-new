import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import entityReducer from './entityReducer';

export default combineReducers({
  menu: menuReducer,
  entities: entityReducer,
  cart: cartReducer,
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