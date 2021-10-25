import Amplify, { API } from "aws-amplify";

import { listProducts } from "../../api/queries";

import actions from "./actions";

const { fetchProduct, productIsFetching } = actions;

const addProduct = (product) => {
  return async dispatch => {
    try {
      dispatch(productIsFetching());
      dispatch(fetchProduct(product));
    } catch (err) {
      const error = new Error("Problem adding product");
      error.inner = err;
      throw error;
    }
  };
};

export { addProduct };
