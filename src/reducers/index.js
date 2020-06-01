import {combineReducers} from 'redux'
import transaction from './transactionReducer'
import currencyReducer from './currencyReducer'

export default combineReducers({
  transactions: transaction,
  currency: currencyReducer,
})
