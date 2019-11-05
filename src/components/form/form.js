import React from "react";
import { Field, reduxForm } from "redux-form";
import * as S from "./form.styles";
import CustomButton from "../custom-button/custom-button";
import { addTransaction } from "../../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const renderInput = formProps => {
  return (
    <S.FieldBox>
      <S.Label>{formProps.label}</S.Label>
      <S.Input {...formProps.input} autoComplete="off" />
      <S.ErrorText>{renderError(formProps.meta)}</S.ErrorText>
    </S.FieldBox>
  );
};
const renderError = props => {
  if (props.touched && props.error) {
    return (
      <div>
        <div>{props.error}</div>
      </div>
    );
  }
  return;
};
const Form = props => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
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
      <S.ButtonsContainer>
        <CustomButton primary type="submit">
          Add
        </CustomButton>
        <CustomButton onClick={() => props.history.push("/")} type="button">
          Cancel
        </CustomButton>
      </S.ButtonsContainer>
    </form>
  );
};

const validate = formValues => {
  const errors = {};
  if (!formValues.transaction) {
    errors.transaction = "You must enter a transaction name";
  }
  if (!formValues.amount) {
    errors.amount = "You must enter transaction amount";
  }
  if (isNaN(formValues.amount)) {
    errors.amount = "You must pass a number";
  }
  return errors;
};

export default withRouter(
  reduxForm({
    form: "AddTransactionForm",
    validate: validate
  })(Form)
);
