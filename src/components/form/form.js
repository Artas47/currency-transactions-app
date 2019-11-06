import React from "react";
import { Field, reduxForm } from "redux-form";
import * as S from "./form.styles";
import CustomButton from "../custom-button/custom-button";
import { withRouter } from "react-router-dom";

const renderInput = ({ label, input, meta }) => {
  return (
    <S.FieldBox>
      <S.Label>{label}</S.Label>
      <S.Input {...input} autoComplete="off" />
      <S.ErrorText>{renderError(meta)}</S.ErrorText>
    </S.FieldBox>
  );
};
const renderError = ({ touched, error }) => {
  if (touched && error) {
    return (
      <div>
        <div>{error}</div>
      </div>
    );
  }
  return;
};
const Form = ({ handleSubmit, onSubmit, history }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <CustomButton onClick={() => history.push("/")} type="button">
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
    errors.amount = "You must pass a valid number";
  }
  return errors;
};

export default withRouter(
  reduxForm({
    form: "AddTransactionForm",
    validate: validate
  })(Form)
);
