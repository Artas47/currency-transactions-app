import React from 'react'
import {useSelector} from 'react-redux'
import * as Styles from './transactions-list.styles'
import Transaction from '../transaction/transaction'

const TransactionsList = () => {
  const transactions = useSelector(state => Object.values(state.transactions))
  return (
    <Styles.TransactionsList>
      <Styles.TransactionsListHeader>
        TRANSACTIONS LIST
      </Styles.TransactionsListHeader>
      <Styles.List>
        {transactions.map(transaction => {
          return (
            <Transaction
              key={transaction.id}
              transactionTitle={transaction.transaction}
              amount={transaction.amount}
              id={transaction.id}
            />
          )
        })}
      </Styles.List>
      <Styles.TransactionsCount>
        Transactions count:
        {transactions.length}
      </Styles.TransactionsCount>
    </Styles.TransactionsList>
  )
}

export default TransactionsList
