const actions = {
    FETCH_PRODUCTS: "FETCH_PRODUCTS",
    PRODUCTS_ISFETCHING: "PRODUCTS_ISFETCHING",
    ADD_TO_USERCART: "ADD_TO_USERCART",
    REMOVE_FROM_USERCART: "REMOVE_FROM_USERCART",
    CLEAR_CART: "CLEAR_CART",
  
    fetchProducts: data => {
      return {
        type: actions.FETCH_PRODUCTS,
        payload: data
      };
    },
  
    productsIsFetching: () => {
      return {
        type: actions.PRODUCTS_ISFETCHING
      };
    },
  };
  
  export default actions;
  