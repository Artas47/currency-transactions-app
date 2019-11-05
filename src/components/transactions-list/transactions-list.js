import React from "react";
import * as S from "./transactions-list.styles";
import Transaction from "../transaction/transaction";
import { connect } from "react-redux";
import _ from "lodash";

const TransactionsList = props => {
  return (
    <S.TransactionsList>
      <S.TransactionsListHeader>TRANSACTIONS LIST</S.TransactionsListHeader>
      <S.List>
        {props.transactions.map(transaction => {
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
        Transactions count: {props.transactions.length}
      </S.TransactionsCount>
    </S.TransactionsList>
  );
};

const mapStateToProps = state => {
  return { transactions: Object.values(state.transactions) };
};

export default connect(mapStateToProps)(TransactionsList);
