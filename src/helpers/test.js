import React from 'react'
import {render} from '@testing-library/react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers/index'

export const renderWithProvider = (Component, intialStoreState) => {
  const store = createStore(reducer, intialStoreState)
  return {...render(<Provider store={store}>{Component}</Provider>), store}
}
