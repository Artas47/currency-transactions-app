import React from "react";
import * as S from "./transaction.styles";
import { connect } from "react-redux";
import { removeTransaction } from "../../actions/index";

const Transaction = props => {
  return (
    <S.Transaction>
      <S.TransactionName>{props.transactionTitle}</S.TransactionName>
      <S.TransactionAmountBox>
        <S.TransactionAmountEuro>
          {Math.round(props.amount * 100) / 100} (EUR)
        </S.TransactionAmountEuro>
        <S.UpArrow style={{ width: "3rem" }}>&darr;</S.UpArrow>
        <S.TransactionAmountPln>
          {Math.round(props.amount * props.plnRate * 100) / 100} (PLN)
        </S.TransactionAmountPln>
      </S.TransactionAmountBox>
      <S.TransactionDelete onClick={() => props.removeTransaction(props.id)}>
        X
      </S.TransactionDelete>
    </S.Transaction>
  );
};

const mapStateToProps = state => {
  return {
    plnRate: state.currency.plnRate
  };
};

export default connect(
  mapStateToProps,
  { removeTransaction }
)(Transaction);
