import React from "react";
import * as S from "./transaction.styles";

const Transaction = props => {
  return (
    <S.Transaction>
      <S.TransactionName>{props.transactionTitle}</S.TransactionName>
      <S.TransactionAmount>{props.amount} (EUR)</S.TransactionAmount>
      <S.TransactionDelete>X</S.TransactionDelete>
    </S.Transaction>
  );
};

export default Transaction;
