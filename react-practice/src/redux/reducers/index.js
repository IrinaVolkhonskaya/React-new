import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import entityReducer from './entityReducer';
import categoryReducer from './categoryReducer';
import sessionReducer from './sessionReducer';

// export default combineReducers({
//   menu: menuReducer,
//   entities: entityReducer,
//   cart: cartReducer,
//   categories: categoryReducer,
//   session: sessionReducer,
// });

const combinedReducer = combineReducers({
  menu: menuReducer,
  entities: entityReducer,
  cart: cartReducer,
  categories: categoryReducer,
  session: sessionReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'session/SIGN_OUT_SUCCESS') {
    //если пользователь разлогинивается, удаляем стейт корзины
    delete state.cart;
  }
  return combinedReducer(state, action);
};

export default rootReducer;

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
