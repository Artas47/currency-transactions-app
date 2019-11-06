import _ from 'lodash'
import {ADD_TRANSACTION, REMOVE_TRANSACTION} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          ...action.payload.formValues,
        },
      }
    case REMOVE_TRANSACTION:
      return _.omit(state, action.payload)
    default:
      return {...state}
  }
}
