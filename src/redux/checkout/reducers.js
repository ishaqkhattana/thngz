import actions from "./actions";

const { STEP1_ISFETCHING, FETCH_STEP1, ADD_TO_STEP1, ADD_TO_STEP2, CHECKOUT } = actions;

const initialState = {
  step1: null,
  step2: null,
  step3: null,
  step1IsFetching: null,
  step2IsFetching: null,
  step3IsFetching: null,
  step1Fetched: null,
  step2Fetched: null,
  step3Fetched: null,
};

const checkoutReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_TO_STEP1:
      console.log(`============ADDING TO STEP1 OF CHECKOUT============`);
      return { ...state, step1: payload, step1IsFetching: false, step1Fetched: true };
      
      case ADD_TO_STEP2:
      console.log(`============ADDING TO STEP2 OF CHECKOUT============`);
      return { ...state, step2: payload, step2IsFetching: false, step2Fetched: true };

      case CHECKOUT:
        console.log(`============CHECKING OUT============`);
        return { ...state, step3: payload, step3IsFetching: false, step3Fetched: true };
    // case USERCART_ISFETCHING:
    //   return { ...state, userCart: null, isFetching: true, fetched: false };
    // case ADD_TO_USERCART:
    //   if (state.userCart == null) {
    //     return { ...state, userCart: [payload] };
    //   } else {
    //     return { ...state, userCart: [...state.userCart, payload] };
    //   }
    // case REMOVE_FROM_USERCART:
    //   const newCart = state.userCart.filter(
    //     (product) => product.id !== payload.id
    //   );
    //   return { ...state, userCart: newCart };
    // case CLEAR_CART:
    default:
      return state;
  }
};

export default checkoutReducer;
