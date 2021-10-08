import Amplify, { API } from "aws-amplify";

import { listProducts } from "../../api/queries";

import actions from "./actions";

const { fetchProducts, productsIsFetching } = actions;

const getProducts = () => {
  return async dispatch => {
    try {
      dispatch(productsIsFetching());
      const response = await API.graphql({
        query: listProducts,
        authMode: 'API_KEY'
      })
      dispatch(fetchProducts(response.data.listProducts.items));
    } catch (err) {
      const error = new Error("Problem fetching user cart");
      error.inner = err;
      throw error;
    }
  };
};

export { getProducts };
