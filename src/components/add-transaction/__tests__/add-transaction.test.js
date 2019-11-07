import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {fireEvent} from '@testing-library/dom'
import {renderWithProvider} from '../../../helpers/test'

import '@testing-library/jest-dom/extend-expect'
import AddTransaction from '../add-transaction'

test('should the error message show or hide if valid number is passed or not', () => {
  const {store, getByTestId} = renderWithProvider(
    <BrowserRouter>
      <AddTransaction />
    </BrowserRouter>,
  )
  const amountInput = getByTestId('amount-input')
  fireEvent.change(amountInput, {target: {value: 54}})
  expect(store.getState().form.AddTransaction.syncErrors.amount).toBeUndefined()
  fireEvent.change(amountInput, {target: {value: 'not number'}})
  expect(store.getState().form.AddTransaction.syncErrors.amount).toBe(
    'You must pass a valid amount',
  )
})

test('should the error message show or hide if transaction name is passed', () => {
  const {store, getByTestId} = renderWithProvider(
    <BrowserRouter>
      <AddTransaction />
    </BrowserRouter>,
  )
  const transactionInput = getByTestId('transaction-input')
  fireEvent.change(transactionInput, {target: {value: ''}})
  expect(store.getState().form.AddTransaction.syncErrors.transaction).toBe(
    'You must enter a transaction name',
  )
  fireEvent.change(transactionInput, {target: {value: 'my transaction'}})
  expect(
    store.getState().form.AddTransaction.syncErrors.transaction,
  ).toBeUndefined()
})
