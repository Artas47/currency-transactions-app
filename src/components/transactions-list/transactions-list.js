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
        {_.map(props.transactions, transaction => {
          return (
            <Transaction
              transactionTitle={transaction.transaction}
              amount={transaction.amount}
            />
          );
        })}
      </S.List>
    </S.TransactionsList>
  );
};

const mapStateToProps = state => {
  return { transactions: state.transactions };
};

export default connect(mapStateToProps)(TransactionsList);
