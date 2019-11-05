const INITIAL_STATE = { plnRate: 4.3 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_PLN":
      return { ...state, plnRate: state.plnRate + 0.01 };
    case "DECREMENT_PLN":
      return { ...state, plnRate: state.plnRate - 0.01 };
    case "PLN_RATE_CHANGE":
      return { ...state, plnRate: action.payload };
    default:
      return { ...state };
  }
};
