import actions from "./actions";

const {
  FETCH_PRODUCTS,
  PRODUCTS_ISFETCHING
} = actions;

const initialState = {
  products: null,
  isFetching: false,
  fetched: false
};

const productsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      console.log(`============FETCHING PRODUCTS============`);
      return { ...state, products: payload, isFetching: false, fetched: true };
    case PRODUCTS_ISFETCHING:
      return { ...state, products: null, isFetching: true, fetched: false };
    default:
      return state;
  }
};

export default productsReducer;
