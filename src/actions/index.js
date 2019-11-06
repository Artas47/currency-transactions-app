import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
  INCREMENT_PLN,
  DECREMENT_PLN,
  CHANGE_PLN_RATE
} from "./types";

export const addTransaction = (formValues, id) => {
  return {
    type: ADD_TRANSACTION,
    payload: { id, formValues }
  };
};

export const removeTransaction = id => {
  return {
    type: REMOVE_TRANSACTION,
    payload: id
  };
};

export const incrementPlnRate = () => {
  return {
    type: INCREMENT_PLN
  };
};

export const decrementPlnRate = () => {
  return {
    type: DECREMENT_PLN
  };
};

export const changePlnRate = value => {
  return {
    type: CHANGE_PLN_RATE,
    payload: value
  };
};
