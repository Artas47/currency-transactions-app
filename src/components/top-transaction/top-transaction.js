import React from 'react'
import {useSelector} from 'react-redux'
import * as Styles from './top-transaction.styles'
import {
  selectPlnRate,
  selectBiggestTransaction,
} from '../../selectors/selectors'

const TopTransaction = () => {
  const plnRate = useSelector(selectPlnRate)
  const biggestTransaction = useSelector(selectBiggestTransaction)
  const topTransaction = biggestTransaction ? (
    <>
      <Styles.TopTransactionTitle data-testid="top-transaction-title">
        {biggestTransaction.transaction}
      </Styles.TopTransactionTitle>
      <Styles.TopTransactionAmountBox>
        <Styles.TopTransactionAmountEur data-testid="top-transaction-eur-amout">
          {Math.round(biggestTransaction.amount * 100) / 100}
          (EUR)
        </Styles.TopTransactionAmountEur>
        <Styles.TopTransactionArrow>&darr;</Styles.TopTransactionArrow>
        <Styles.TopTransactionAmountPln>
          {Math.round(biggestTransaction.amount * plnRate * 100) / 100}
          (PLN)
        </Styles.TopTransactionAmountPln>
      </Styles.TopTransactionAmountBox>
    </>
  ) : (
    <Styles.TopTransactionEmpty data-testid="no-transactions-text">
      No transactions
    </Styles.TopTransactionEmpty>
  )
  return (
    <Styles.TopTransaction>
      <Styles.TopTransactionHeader>
        Biggest amount transaction
      </Styles.TopTransactionHeader>
      <Styles.TopTransactionBox>{topTransaction}</Styles.TopTransactionBox>
    </Styles.TopTransaction>
  )
}

export default TopTransaction
