const actions = {
  FETCH_STEP1: "FETCH_STEP1",
  STEP1_ISFETCHING: "STEP1_ISFETCHING",
  ADD_TO_STEP1: "ADD_TO_STEP1",
  FETCH_STEP2: "FETCH_STEP2",
  STEP2_ISFETCHING: "STEP2_ISFETCHING",
  ADD_TO_STEP2: "ADD_TO_STEP2",
  FETCH_STEP3: "FETCH_STEP3",
  STEP3_ISFETCHING: "STEP3_ISFETCHING",
  ADD_TO_STEP3: "ADD_TO_STEP3",
  CHECKOUT: "CHECKOUT",

  fetchStep1: () => {
    return {
      type: actions.FETCH_STEP1,
    };
  },

  fetchStep2: () => {
    return {
      type: actions.FETCH_STEP2,
    };
  },

  fetchStep2: () => {
    return {
      type: actions.FETCH_STEP2,
    };
  },

  step1IsFetching: () => {
    return {
      type: actions.STEP1_ISFETCHING,
    };
  },

  step2IsFetching: () => {
    return {
      type: actions.STEP2_ISFETCHING,
    };
  },

  step2IsFetching: () => {
    return {
      type: actions.STEP3_ISFETCHING,
    };
  },

  addToStep1: (data) => {
    return {
      type: actions.ADD_TO_STEP1,
      payload: data,
    };
  },

  addToStep2: (data) => {
    return {
      type: actions.ADD_TO_STEP2,
      payload: data,
    };
  },

  addToStep3: (data) => {
    return {
      type: actions.ADD_TO_STEP3,
      payload: data,
    };
  },

  checkout: (data) => {
    return {
      type: actions.CHECKOUT,
      payload: data
    }
  }

}

 

export default actions;
