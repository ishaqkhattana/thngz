// import cartService from "../../services/cartService";
import actions from "./actions";

const { fetchUserCart, userCartIsFetching, removeFromUserCart, addToUserCart } = actions;

const getUserCart = studentId => {
  return async dispatch => {
    try {
      dispatch(userCartIsFetching());
    //   const response = await cartService.getCart(studentId);
      dispatch(fetchUserCart());
    } catch (err) {
      const error = new Error("Problem fetching user cart");
      error.inner = err;
      throw error;
    }
  };
};

const addToCart = (data) => {
  return async dispatch => {
    try {
        console.log("in action creator", data)
      dispatch(addToUserCart(data));
    } catch (err) {
        console.log(err)
      const error = new Error("Problem adding to user cart");
      error.inner = err;
      throw error;
    }
  };
};

const deleteCartItem = (item) => {
  return async dispatch => {
    try {
      dispatch(removeFromUserCart(item));
    } catch (err) {
      console.log(err);
      const error = new Error("Problem deleting item from cart");
      error.inner = err;
      throw error;
    }
  };
};

export { addToCart, getUserCart, deleteCartItem };
