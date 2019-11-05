export const addTransaction = (formValues, id) => {
  return {
    type: "ADD_TRANSACTION",
    payload: { id, formValues }
  };
};

export const removeTransaction = id => {
  return {
    type: "REMOVE_TRANSACTION",
    payload: id
  };
};

export const incrementPlnRate = () => {
  return {
    type: "INCREMENT_PLN"
  };
};

export const decrementPlnRate = () => {
  return {
    type: "DECREMENT_PLN"
  };
};

export const plnRateChange = value => {
  return {
    type: "PLN_RATE_CHANGE",
    payload: value
  };
};
