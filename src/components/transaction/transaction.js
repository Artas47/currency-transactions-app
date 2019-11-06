import React from "react";
import * as S from "./transaction.styles";
import { connect } from "react-redux";
import { removeTransaction } from "../../actions/index";
import PropTypes from "prop-types";

const Transaction = ({
  amount,
  transactionTitle,
  plnRate,
  id,
  removeTransaction
}) => {
  const roundedAmount = Math.round(amount * 100) / 100;
  return (
    <S.Transaction>
      <S.TransactionName>{transactionTitle}</S.TransactionName>
      <S.TransactionAmountBox>
        <S.TransactionAmountEuro>{roundedAmount} (EUR)</S.TransactionAmountEuro>
        <S.UpArrow>&darr;</S.UpArrow>
        <S.TransactionAmountPln>
          {Math.round(amount * plnRate * 100) / 100} (PLN)
        </S.TransactionAmountPln>
      </S.TransactionAmountBox>
      <S.TransactionDelete onClick={() => removeTransaction(id)}>
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

Transaction.propTypes = {
  plnRate: PropTypes.number
};
