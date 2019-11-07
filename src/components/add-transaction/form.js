/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as Styles from './form.styles'
import CustomButton from '../custom-button/custom-button'

const renderError = ({touched, error}) => {
  if (touched && error) {
    return <>{error}</>
  }
  return null
}
const renderInput = ({label, input, meta}) => {
  return (
    <Styles.FieldBox>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input {...input} autoComplete="off" />
      <Styles.ErrorText>{renderError(meta)}</Styles.ErrorText>
    </Styles.FieldBox>
  )
}
const Form = ({handleSubmit, onSubmit, history}) => {
  return (
    <Styles.Form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="transaction"
        component={renderInput}
        label="Enter transaction name"
      />
      <Field
        name="amount"
        component={renderInput}
        label="Enter transaction amount (EUR)"
      />
      <Styles.ButtonsContainer>
        <CustomButton primary type="submit">
          Add
        </CustomButton>
        <CustomButton onClick={() => history.push('/')} type="button">
          Cancel
        </CustomButton>
      </Styles.ButtonsContainer>
    </Styles.Form>
  )
}

const validate = formValues => {
  const errors = {}
  if (!formValues.transaction) {
    errors.transaction = 'You must enter a transaction name'
  }
  if (!formValues.amount) {
    errors.amount = 'You must enter transaction amount'
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(formValues.amount)) {
    errors.amount = 'You must pass a valid number'
  }
  return errors
}

export default withRouter(
  reduxForm({
    form: 'AddTransaction',
    validate,
  })(Form),
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({push: PropTypes.func.isRequired}).isRequired,
}

renderInput.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
}

renderError.propTypes = {
  touched: PropTypes.isRequired,
  error: PropTypes.isRequired,
}
