import { combineReducers } from 'redux';
import { actionTypes } from '../actionsCart';

//карта корзины
// cart: {
//     ids: [1, 2, 3, 4, 5],
//     amout: {
//         1: 5,
//         2: 7
//     }
// }

function ids(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return state.includes(payload.id) ? state : [...state, payload.id];

    case actionTypes.REMOVE_FROM_CART:
      return state.filter(id => id !== payload.id);
    default:
      return state;
  }
}

function amount(state = {}, { type, payload }) {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
      };

    case actionTypes.REMOVE_FROM_CART: {
      const { [payload.id]: _, ...newState } = state; //ключ по id(товар, что нужно удалить), мы деструктуризируем наше состояние, записываем в "левую переменную""_" (в то, что никогда не будем использовать), остальные ключи с значениями (оставшиеся товары в корзине),мы записываем в переменную newState,
      return newState; // делаем return объекта, но без ключа (того, что нужно удалить).
    }

    default:
      return state;
  }
}

export default combineReducers({
  ids,
  amount,
});
