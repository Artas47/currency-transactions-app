import React from 'react'
import {fireEvent, waitFor} from '@testing-library/dom'
import {BrowserRouter} from 'react-router-dom'
import {renderWithProvider} from '../../../helpers/test'
import '@testing-library/jest-dom/extend-expect'
import AddTransactionForm from '../add-transaction-form'

test('should add transaction', async () => {
  const {
    getByTestId,
    store: {getState},
  } = renderWithProvider(
    <BrowserRouter>
      <AddTransactionForm />
    </BrowserRouter>,
  )
  const submitButton = await waitFor(() => getByTestId('submit-button'))
  const transactionInput = getByTestId('transaction-input')
  const amountInput = getByTestId('amount-input')
  fireEvent.change(transactionInput, {target: {value: 'transaction sample'}})
  fireEvent.change(amountInput, {target: {value: '250'}})
  await waitFor(() => {
    fireEvent.click(submitButton)
  })
  const transaction = Object.values(getState().transactions)[0].transaction
  expect(transaction).toEqual('transaction sample')
})

test('should the error message show or hide if transaction name is passed or not', async () => {
  const {getByTestId, queryByTestId} = renderWithProvider(
    <AddTransactionForm />,
  )
  const submitButton = await waitFor(() => getByTestId('submit-button'))
  await waitFor(() => {
    fireEvent.click(submitButton)
  })
  expect(getByTestId('transaction-error-text')).toHaveTextContent(
    /you must pass transaction name/i,
  )
  const input = await waitFor(() => getByTestId('transaction-input'))
  fireEvent.change(input, {target: {value: 'transaction1'}})
  await waitFor(() => {
    fireEvent.click(submitButton)
  })
  expect(queryByTestId('transaction-error-text')).not.toBeInTheDocument()
})

test('should the error message show or hide if the valid amount is passed or not', async () => {
  const {getByTestId, queryByTestId} = renderWithProvider(
    <AddTransactionForm />,
  )
  const submitButton = await waitFor(() => getByTestId('submit-button'))
  await waitFor(() => {
    fireEvent.click(submitButton)
  })
  expect(getByTestId('amount-error-text')).toHaveTextContent(
    /you must mass transaction amount/i,
  )
  const input = await waitFor(() => getByTestId('amount-input'))
  fireEvent.change(input, {target: {value: 534}})
  await waitFor(() => {
    fireEvent.click(submitButton)
  })
  expect(queryByTestId('amount-error-text')).not.toBeInTheDocument()
  fireEvent.change(input, {target: {value: 'some text'}})
  await waitFor(() => {
    fireEvent.click(submitButton)
  })
  expect(queryByTestId('amount-error-text')).toHaveTextContent(
    /you must mass a valid amount/i,
  )
})
