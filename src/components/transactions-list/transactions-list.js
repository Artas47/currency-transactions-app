import React from "react";
import * as S from "./transactions-list.styles";
import Transaction from "../transaction/transaction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TransactionsList = ({ transactions }) => {
  return (
    <S.TransactionsList>
      <S.TransactionsListHeader>TRANSACTIONS LIST</S.TransactionsListHeader>
      <S.List>
        {transactions.map(transaction => {
          return (
            <Transaction
              key={transaction.id}
              transactionTitle={transaction.transaction}
              amount={transaction.amount}
              id={transaction.id}
            />
          );
        })}
      </S.List>
      <S.TransactionsCount>
        Transactions count: {transactions.length}
      </S.TransactionsCount>
    </S.TransactionsList>
  );
};

const mapStateToProps = state => {
  return { transactions: Object.values(state.transactions) };
};

export default connect(mapStateToProps)(TransactionsList);

TransactionsList.propTypes = {
  transactions: PropTypes.array
};
