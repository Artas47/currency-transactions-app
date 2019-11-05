import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          ...action.payload.formValues
        }
      };
    case "REMOVE_TRANSACTION":
      return _.omit(state, action.payload);
    default:
      return { ...state };
  }
};
