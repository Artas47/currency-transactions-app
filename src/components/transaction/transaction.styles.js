import styled from "styled-components";

export const Transaction = styled.div`
  width: 80%;
  height: 15rem;
  font-size: 1.3rem;
  background-color: lightsalmon;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.2);
  border: 1px solid darkgrey;

  :not(:last-child) {
    margin-bottom: 3rem;
  }

  :last-child {
    margin-bottom: 3rem;
  }
`;

export const TransactionName = styled.h2`
  margin-left: 5rem;
`;

export const TransactionAmount = styled.h2``;

export const TransactionDelete = styled.h2`
  margin-right: 5rem;
  cursor: pointer;
`;
