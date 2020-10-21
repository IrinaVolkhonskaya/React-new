import { connect } from 'react-redux';
import CartIconView from './CartIconView';
import * as selectors from '../../redux/selectors';

const mapState = state => ({
    amount: selectors.getCartProductsAmount(state),
});

export default connect(mapState)(CartIconView);
