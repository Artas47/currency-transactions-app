import React from 'react'
import {useSelector} from 'react-redux'
import * as Styles from './transactions-list.styles'
import Transaction from '../transaction/transaction'
import {selectTransactions} from '../../selectors/selectors'

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions)
  return (
    <Styles.TransactionsList>
      <Styles.TransactionsListHeader>
        TRANSACTIONS LIST
      </Styles.TransactionsListHeader>
      <Styles.List>
        {transactions.map(transaction => {
          return (
            <Transaction
              data-testid="transaction"
              key={transaction.id}
              transactionTitle={transaction.transaction}
              amount={transaction.amount}
              id={transaction.id}
            />
          )
        })}
      </Styles.List>
      <Styles.TransactionsCount data-testid="transactions-length">
        Transactions count:
        {transactions.length}
      </Styles.TransactionsCount>
    </Styles.TransactionsList>
  )
}

export default TransactionsList
