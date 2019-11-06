import React from "react";
import * as S from "./top-transaction.styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TopTransaction = ({ transactions, plnRate }) => {
  const arrOfAmounts = transactions.map(transaction => {
    return transaction.amount;
  });

  let biggestTransaction = transactions.find(transaction => {
    return transaction.amount >= Math.max(...arrOfAmounts.map(Number));
  });
  const topTransaction = biggestTransaction ? (
    <React.Fragment>
      <S.TopTransactionTitle>
        {biggestTransaction.transaction}
      </S.TopTransactionTitle>
      <S.TopTransactionAmountBox>
        <S.TopTransactionAmountEur>
          {biggestTransaction.amount} (EUR)
        </S.TopTransactionAmountEur>
        <S.TopTransactionArrow>&darr;</S.TopTransactionArrow>
        <S.TopTransactionAmountPln>
          {Math.round(biggestTransaction.amount * plnRate * 100) / 100} (PLN)
        </S.TopTransactionAmountPln>
      </S.TopTransactionAmountBox>
    </React.Fragment>
  ) : (
    <S.TopTransactionEmpty>No transactions</S.TopTransactionEmpty>
  );
  return (
    <S.TopTransaction>
      <S.TopTransactionHeader>
        Biggest amount transaction
      </S.TopTransactionHeader>
      <S.TopTransactionBox>{topTransaction}</S.TopTransactionBox>
    </S.TopTransaction>
  );
};

const mapStateToProps = state => {
  return {
    transactions: Object.values(state.transactions),
    plnRate: state.currency.plnRate
  };
};

export default connect(mapStateToProps)(TopTransaction);

TopTransaction.propTypes = {
  transactions: PropTypes.array
};
