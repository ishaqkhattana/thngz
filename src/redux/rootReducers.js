import { combineReducers } from "redux";
import productsReducer from "./products/reducers";
import productReducer from "./selectedProduct/reducers";
import cartReducer from "./cart/reducers";
import checkoutReducer from "./checkout/reducers";

const rootReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  checkout: checkoutReducer
});

export default rootReducers;
