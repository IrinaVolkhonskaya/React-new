import { combineReducers} from 'redux';
import productsReducer from './productsReducer';
import entityReducer from './entityReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    entities: entityReducer,
});

