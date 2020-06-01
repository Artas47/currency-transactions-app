import React from 'react'
import {Formik} from 'formik'
import {v4 as uuid} from 'uuid'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import * as Styles from './form.styles'
import {addTransaction} from '../../actions/index'
import CustomButton from '../custom-button/custom-button'

const validate = values => {
  const errors = {}

  if (!values.transaction) {
    errors.transaction = 'You must pass transaction name'
  }
  if (!values.amount) {
    errors.amount = 'You must mass transaction amount'
  }
  if (isNaN(values.amount)) {
    errors.amount = 'You must mass a valid amount'
  }
  return errors
}

const Form = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
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
            <label>Transaction name</label>
            <Styles.Input
              type="text"
              onChange={handleChange}
              value={values.transaction}
              name="transaction"
            />
            {errors.transaction && (
              <Styles.ErrorText>{errors.transaction}</Styles.ErrorText>
            )}
            <label>Amount</label>
            <Styles.Input
              type="text"
              onChange={handleChange}
              value={values.amount}
              name="amount"
            />
            {errors.amount && (
              <Styles.ErrorText>{errors.amount}</Styles.ErrorText>
            )}
            <Styles.ButtonsContainer>
              <CustomButton primary type="submit">
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
}
export default Form
