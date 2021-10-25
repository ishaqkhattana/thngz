import actions from "./actions";

const {
  FETCH_USERCART,
  USERCART_ISFETCHING,
  ADD_TO_USERCART,
  REMOVE_FROM_USERCART,
  CLEAR_CART
} = actions;

const initialState = {
  userCart: [],
  isFetching: false,
  fetched: false
};

const cartReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_USERCART:
      console.log(`============FETCHING CART============`);
      return { ...state , isFetching: false, fetched: true };
    case USERCART_ISFETCHING:
      return { ...state, userCart: null, isFetching: true, fetched: false };
    case ADD_TO_USERCART:
        if(state.userCart == null){
            return {...state, userCart: [payload]}
        }
        else{
            return {...state, userCart: [...state.userCart, payload] }
        }
    case REMOVE_FROM_USERCART:
      const newCart = state.userCart.filter((product) => product.id !== payload.id)
      return { ...state, userCart: newCart}
    case CLEAR_CART:
    default:
      return state;
  }
};

export default cartReducer;
