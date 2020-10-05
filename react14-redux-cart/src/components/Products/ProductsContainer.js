import { connect } from "react-redux";
import ProductView from "./ProductsView";
import * as selectors from "../../redux/selectors";
import * as actions from "../../redux/actions";

const mapState = state => ({
    products: selectors.getProducts(state),
});

const mapDispatch = { addToCart: actions.addToCart};

export default connect(mapState, mapDispatch)(ProductView);

// export default connect(
//   (state) => ({
//     products: selectors.getProducts(state),
//   }),
//   { addToCart: actions.addToCart }
// )(ProductView);
