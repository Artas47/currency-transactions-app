import React from 'react'
import {Link} from 'react-router-dom'
import * as Styles from './add-transaction-button.styles'

const AddTransactionButton = () => {
  return (
    <Link to="/addTransaction">
      <Styles.AddTransactionButton>Add transaction</Styles.AddTransactionButton>
    </Link>
  )
}

export default AddTransactionButton
