import {combineReducers} from 'redux'
import transaction from './transactionReducer'
import currencyReducer from './currecyReducer'

export default combineReducers({
  transactions: transaction,
  currency: currencyReducer,
})
