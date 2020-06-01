import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {getByTestId} from '@testing-library/dom'
import {renderWithProvider} from '../../../helpers/test'
import TransactionsList from '../transactions-list'

test('should render list of transactions', () => {
  const transactions = {
    transactions: {
      '841b3d4a-f00b-4497-9551-61472ec801e5': {
        id: '841b3d4a-f00b-4497-9551-61472ec801e5',
        transaction: 'transaction1',
        amount: '4234',
      },
      '60baca72-9b7b-4de3-9187-3eeeed54cea1': {
        id: '60baca72-9b7b-4de3-9187-3eeeed54cea1',
        transaction: 'transaction2',
        amount: '532523',
      },
      'e41d8541-4ced-45d6-9a61-d4c8c6498cca': {
        id: 'e41d8541-4ced-45d6-9a61-d4c8c6498cca',
        transaction: 'transaction3',
        amount: '52352',
      },
    },
  }
  const {store} = renderWithProvider(<TransactionsList />, transactions)
  const transactionsList = Object.values(store.getState().transactions).map(
    item => item.transaction,
  )
  const fakeTransactions = Object.values(transactions.transactions).map(
    item => item.transaction,
  )
  expect(transactionsList).toEqual(fakeTransactions)
})

test('renders specific number of transactions ', () => {
  const transactions = {
    transactions: {
      '841b3d4a-f00b-4497-9551-61472ec801e5': {
        id: '841b3d4a-f00b-4497-9551-61472ec801e5',
        transaction: 'transaction1',
        amount: '4234',
      },
      '60baca72-9b7b-4de3-9187-3eeeed54cea1': {
        id: '60baca72-9b7b-4de3-9187-3eeeed54cea1',
        transaction: 'transaction2',
        amount: '532523',
      },
      'e41d8541-4ced-45d6-9a61-d4c8c6498cca': {
        id: 'e41d8541-4ced-45d6-9a61-d4c8c6498cca',
        transaction: 'transaction3',
        amount: '52352',
      },
    },
  }
  const {container, store} = renderWithProvider(
    <TransactionsList />,
    transactions,
  )
  const transactionsListLength = Object.values(store.getState().transactions)
    .length
  expect(getByTestId(container, 'transactions-length')).toHaveTextContent(
    `Transactions count:${transactionsListLength}`,
  )
})
