import React from 'react'
import {useDispatch} from 'react-redux'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'
import Modal from '../modal/modal'
import * as Styles from './add-transaction.styles'
import Form from './form'
import {addTransaction} from '../../actions/index'

const AddTransactionForm = props => {
  const dispatch = useDispatch()
  const onSubmit = formValues => {
    dispatch(addTransaction(formValues, uuid()))
    props.history.push('/')
  }
  const modalContent = () => {
    return (
      <Styles.AddTransitionModalContent>
        <Form onSubmit={onSubmit} />
      </Styles.AddTransitionModalContent>
    )
  }
  return <Modal header="Add transaction" modalContent={modalContent()} />
}

export default AddTransactionForm

AddTransactionForm.propTypes = {
  history: PropTypes.shape({push: PropTypes.func.isRequired}).isRequired,
}
