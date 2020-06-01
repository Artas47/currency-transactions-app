import React from 'react'
import Modal from '../modal/modal'
import * as Styles from './add-transaction.styles'
import Form from '../form/form'

const AddTransaction = () => {
  const modalContent = () => {
    return (
      <Styles.AddTransactionModalContent>
        <Form />
      </Styles.AddTransactionModalContent>
    )
  }
  return <Modal header="Add transaction" modalContent={modalContent()} />
}

export default AddTransaction
