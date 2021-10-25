const actions = {
    FETCH_PRODUCT: "FETCH_PRODUCT",
    PRODUCT_ISFETCHING: "PRODUCT_ISFETCHING",
  
    fetchProduct: data => {
      return {
        type: actions.FETCH_PRODUCT,
        payload: data
      };
    },
  
    productIsFetching: () => {
      return {
        type: actions.PRODUCT_ISFETCHING
      };
    },
  };
  
  export default actions;
  