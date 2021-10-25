import actions from "./actions";

const {
  FETCH_PRODUCT,
  PRODUCT_ISFETCHING
} = actions;

const initialState = {
  product: null,
  isFetching: false,
  fetched: false
};

const productReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_PRODUCT:
      console.log(`============FETCHING PRODUCTS============`);
      return { ...state, product: payload, isFetching: false, fetched: true };
    case PRODUCT_ISFETCHING:
      return { ...state, product: null, isFetching: true, fetched: false };
    default:
      return state;
  }
};

export default productReducer;
