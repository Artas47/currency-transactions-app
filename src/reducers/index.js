import { combineReducers } from "redux";
import { reducer as fromReducer } from "redux-form";
import transaction from "./transactionReducer";

export default combineReducers({
  replaceMe: () => "replace me",
  form: fromReducer,
  transactions: transaction
});
