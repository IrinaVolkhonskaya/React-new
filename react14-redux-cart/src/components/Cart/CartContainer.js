import { connect } from "react-redux";
import CartView from "../Cart/CartView";
import * as selectors from "../../redux/selectors";
import * as actions from "../../redux/actions";

const mapState = (state) => ({
  products: selectors.getCartProducts(state),
});

const mapDispatch = { removeFromCart: actions.removeFromCart };

export default connect(mapState, mapDispatch)(CartView);
