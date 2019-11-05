import React from "react";
import * as S from "./add-transaction-button.styles";
import { Link } from "react-router-dom";

const AddTransactionButton = () => {
  return (
    <Link to="/addTransition">
      <S.AddTransactionButton>Add transaction</S.AddTransactionButton>
    </Link>
  );
};

export default AddTransactionButton;
