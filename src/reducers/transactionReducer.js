export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      console.log(action);
      return {
        ...state,
        [action.payload.id]: action.payload.formValues
      };
    default:
      return { ...state };
  }
};
