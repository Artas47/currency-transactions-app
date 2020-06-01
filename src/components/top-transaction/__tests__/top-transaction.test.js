import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import TopTransaction from '../top-transaction'
import {renderWithProvider} from '../../../helpers/test'

test('should render text when there is no transactions', () => {
  const {getByTestId} = renderWithProvider(<TopTransaction />)
  const noTransactionsText = getByTestId('no-transactions-text')
  expect(noTransactionsText).toHaveTextContent(/no transactions/i)
})

test('should render the biggest transaction', () => {
  const transactions = {
    transactions: {
      '841b3d4a-f00b-4497-9551-61472ec801e5': {
        id: '841b3d4a-f00b-4497-9551-61472ec801e5',
        transaction: 'transaction1',
        amount: '100',
      },
      '60baca72-9b7b-4de3-9187-3eeeed54cea1': {
        id: '60baca72-9b7b-4de3-9187-3eeeed54cea1',
        transaction: 'transaction2',
        amount: '200',
      },
    },
  }
  const {getByTestId} = renderWithProvider(<TopTransaction />, transactions)
  const topTransactionTitle = getByTestId('top-transaction-title')
  const topTransactionEurAmount = getByTestId('top-transaction-eur-amout')
  expect(topTransactionTitle).toHaveTextContent(/transaction2/i)
  expect(topTransactionEurAmount).toHaveTextContent(/200/i)
})
