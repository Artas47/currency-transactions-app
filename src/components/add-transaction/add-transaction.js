import React from "react";
import Modal from "../modal/modal";
import * as S from "./add-transaction.styles";
import { withRouter } from "react-router-dom";
import Form from "../form/form";
import { addTransaction } from "../../actions/index";
import { connect } from "react-redux";
import uuid from "uuid/v4";

const AddTransactionForm = ({ addTransaction, history }) => {
  const onSubmit = formValues => {
    addTransaction(formValues, uuid());
    history.push("/");
  };
  const modalContent = () => {
    return (
      <S.AddTransitionModalContent>
        <Form onSubmit={onSubmit} />
      </S.AddTransitionModalContent>
    );
  };
  return <Modal header="Add transaction" modalContent={modalContent()} />;
};

export default connect(
  null,
  { addTransaction }
)(withRouter(AddTransactionForm));
