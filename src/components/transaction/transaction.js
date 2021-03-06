import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import {removeTransaction} from '../../actions/index'
import * as Styles from './transaction.styles'
import {selectPlnRate} from '../../selectors/selectors'

const Transaction = ({amount, transactionTitle, id}) => {
  const dispatch = useDispatch()
  const plnRate = useSelector(selectPlnRate)
  const roundedAmount = Math.round(amount * 100) / 100
  return (
    <Styles.Transaction>
      <Styles.TransactionName data-testid="transaction-title">
        {transactionTitle}
      </Styles.TransactionName>
      <Styles.TransactionAmountBox>
        <Styles.TransactionAmountEuro data-testid="transaction-eur-amount">
          {roundedAmount}
          (EUR)
        </Styles.TransactionAmountEuro>
        <Styles.UpArrow>&darr;</Styles.UpArrow>
        <Styles.TransactionAmountPln data-testid="transaction-pln-amount">
          {Math.round(amount * plnRate * 100) / 100}
          (PLN)
        </Styles.TransactionAmountPln>
      </Styles.TransactionAmountBox>
      <Styles.TransactionDelete
        data-testid="delete-button"
        onClick={() => dispatch(removeTransaction(id))}
      >
        X
      </Styles.TransactionDelete>
    </Styles.Transaction>
  )
}

export default Transaction

Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  transactionTitle: PropTypes.string.isRequired,
}
