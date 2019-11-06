import {INCREMENT_PLN, DECREMENT_PLN, CHANGE_PLN_RATE} from '../actions/types'

const INITIAL_STATE = {plnRate: 4.3}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_PLN:
      return {
        ...state,
        plnRate: parseFloat((state.plnRate + 0.01).toFixed(2)),
      }
    case DECREMENT_PLN:
      return {
        ...state,
        plnRate: parseFloat((state.plnRate - 0.01).toFixed(2)),
      }
    case CHANGE_PLN_RATE:
      return {...state, plnRate: action.payload}
    default:
      return {...state}
  }
}
