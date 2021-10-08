import { combineReducers } from "redux";
import productsReducer from "./products/reducers";

const rootReducers = combineReducers({
  products: productsReducer
});

export default rootReducers;
