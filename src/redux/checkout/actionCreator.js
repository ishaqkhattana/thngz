import { API } from "aws-amplify";
import { createOrder, updateProduct } from "../../api/mutations";
import actions from "./actions";

const { addToStep1, addToStep2, checkout } = actions;

const addDataToStep1 = (data) => {
  return async (dispatch) => {
    try {
      dispatch(addToStep1(data));
    } catch (err) {
      const error = new Error("Problem fetching Step1 Data");
      console.log(err);
      throw err;
    }
  };
};

const addDataToStep2 = (data) => {
  return async (dispatch) => {
    try {
      dispatch(addToStep2(data));
    } catch (err) {
      const error = new Error("Problem fetching Step1 Data");
      console.log(err);
      throw err;
    }
  };
};

const checkoutNow = (data) => {
  return async (dispatch) => {
    try {
      const orderResult = await API.graphql({
        query: createOrder,
        variables: { input: data },
        authMode: "API_KEY",
      });
      console.log("Order Placed", orderResult);

      let cart = JSON.parse(data.Cart)
      cart.forEach(async (item) => {
        let updatedQuantity = item.Quantity - 1;
        const productUpdateResult = await API.graphql({
          query: updateProduct,
          variables: { input: { id: item.id, Quantity: updatedQuantity } },
          authMode: "API_KEY",
        });
        console.log("Product Updated", productUpdateResult);
      });
      data['id'] = orderResult.data.createOrder.id
      dispatch(checkout(data));
    } catch (err) {
      const error = new Error("Problem Checking Out");
      console.log(err);
      throw err;
    }
  };
};

export { addDataToStep1, addDataToStep2, checkoutNow };
