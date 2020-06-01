import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Transaction from '../transaction'
import {renderWithProvider} from '../../../helpers/test'

test('should properly render transaction', async () => {
  const {
    getByTestId,
    store: {getState},
  } = renderWithProvider(
    <Transaction
      amount="432.62"
      id="123"
      transactionTitle="transaction sample"
    />,
  )
  const transactionTitle = getByTestId('transaction-title')
  const transactionAmountPln = getByTestId('transaction-pln-amount')
  const transactionAmountEur = getByTestId('transaction-eur-amount')
  expect(transactionTitle).toHaveTextContent('transaction sample')
  expect(transactionAmountEur).toHaveTextContent('432.62')
  expect(transactionAmountPln).toHaveTextContent(
    Math.round(432.62 * getState().currency.plnRate * 100) / 100,
  )
})
