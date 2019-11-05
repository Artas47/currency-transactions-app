import { combineReducers } from "redux";
import { reducer as fromReducer } from "redux-form";
import transaction from "./transactionReducer";
import currencyReducer from "./currecyReducer";

export default combineReducers({
  form: fromReducer,
  transactions: transaction,
  currency: currencyReducer
});
