import React from "react";
import * as S from "./top-transaction.styles";
import { connect } from "react-redux";

const TopTransaction = props => {
  const arrOfAmounts = props.transactions.map(transaction => {
    return transaction.amount;
  });
  let biggestTransaction = null;
  biggestTransaction = props.transactions.find(transaction => {
    return transaction.amount >= Math.max(...arrOfAmounts.map(Number));
  });
  return (
    <S.TopTransaction>
      <S.TopTransactionHeader>
        Biggest amount transaction
      </S.TopTransactionHeader>
      <S.TopTransactionBox>
        <S.TopTransactionTitle>
          {biggestTransaction ? biggestTransaction.transaction : ""}
        </S.TopTransactionTitle>
        <S.TopTransactionAmount>
          {biggestTransaction ? biggestTransaction.amount : ""}
        </S.TopTransactionAmount>
      </S.TopTransactionBox>
    </S.TopTransaction>
  );
};

const mapStateToProps = state => {
  return { transactions: Object.values(state.transactions) };
};

export default connect(mapStateToProps)(TopTransaction);
