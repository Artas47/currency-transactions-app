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
