const actions = {
    FETCH_USERCART: "FETCH_USERCART",
    USERCART_ISFETCHING: "USERCART_ISFETCHING",
    ADD_TO_USERCART: "ADD_TO_USERCART",
    REMOVE_FROM_USERCART: "REMOVE_FROM_USERCART",
    CLEAR_CART: "CLEAR_CART",
  
    fetchUserCart: () => {
      return {
        type: actions.FETCH_USERCART,
      };
    },
  
    userCartIsFetching: () => {
      return {
        type: actions.USERCART_ISFETCHING
      };
    },
  
    addToUserCart: data => {
      return {
        type: actions.ADD_TO_USERCART,
        payload: data
      };
    },
  
    removeFromUserCart: data => {
      return {
        type: actions.REMOVE_FROM_USERCART,
        payload: data
      };
    },
  
    clearUserCart: () => {
      return {
        type: actions.CLEAR_CART
      };
    }
  };
  
  export default actions;
  