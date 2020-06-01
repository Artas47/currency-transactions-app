import React from 'react'
import {Formik} from 'formik'
import {v4 as uuid} from 'uuid'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {addTransaction} from '../../actions/index'
import CustomButton from '../custom-button/custom-button'
import Modal from '../modal/modal'
import * as Styles from './add-transaction-form.styles'

const validate = values => {
  const errors = {}

  if (!values.transaction) {
    errors.transaction = 'You must pass transaction name'
  }
  if (!values.amount) {
    errors.amount = 'You must mass transaction amount'
  }
  if (Number.isNaN(Number(values.amount))) {
    errors.amount = 'You must mass a valid amount'
  }
  return errors
}

const AddTransactionForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const form = (
    <div>
      <Formik
        validate={validate}
        validateOnChange={false}
        initialValues={{transaction: '', amount: ''}}
        onSubmit={(values, actions) => {
          dispatch(addTransaction(values, uuid()))
          history.push('/')
          actions.setSubmitting(false)
        }}
      >
        {({handleChange, handleSubmit, values, errors}) => (
          <Styles.Form onSubmit={handleSubmit}>
            <label htmlFor="transaction">Transaction name</label>
            <Styles.Input
              type="text"
              onChange={handleChange}
              value={values.transaction}
              data-testid="transaction-input"
              name="transaction"
              id="transaction"
            />
            {errors.transaction && (
              <Styles.ErrorText data-testid="transaction-error-text">
                {errors.transaction}
              </Styles.ErrorText>
            )}
            <label htmlFor="amount">Amount</label>
            <Styles.Input
              type="text"
              onChange={handleChange}
              value={values.amount}
              data-testid="amount-input"
              name="amount"
              id="amount"
            />
            {errors.amount && (
              <Styles.ErrorText data-testid="amount-error-text">
                {errors.amount}
              </Styles.ErrorText>
            )}
            <Styles.ButtonsContainer>
              <CustomButton primary data-testid="submit-button" type="submit">
                Add
              </CustomButton>
              <CustomButton onClick={() => history.push('/')} type="button">
                Cancel
              </CustomButton>
            </Styles.ButtonsContainer>
          </Styles.Form>
        )}
      </Formik>
    </div>
  )
  return <Modal header="Add transaction" modalContent={form} />
}
export default AddTransactionForm
