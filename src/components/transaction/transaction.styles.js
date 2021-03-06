import styled from 'styled-components'

export const Transaction = styled.div`
  width: 80%;
  height: 15rem;
  font-size: 1.3rem;
  background-color: #daf7d2;
  display: flex;
  flex-wrap: wrap;
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
`

export const TransactionName = styled.h2`
  margin-left: 5rem;
  font-size: 2rem;
  word-wrap: break-word;
  width: 40%;
  @media (max-width: 1300px) {
    width: 30%;
  }
  @media (max-width: 1200px) {
    margin-left: 2rem;
  }
  @media (max-width: 1000px) {
    margin-left: 1rem;
  }
  margin-right: auto;
`

export const TransactionAmountEuro = styled.h2``
export const TransactionAmountPln = styled.h1``

export const TransactionDelete = styled.h2`
  margin-right: 5rem;
  cursor: pointer;
  @media (max-width: 1200px) {
    margin-left: 2rem;
  }
  @media (max-width: 1000px) {
    margin-left: 1rem;
  }
`

export const TransactionAmountBox = styled.div`
  text-align: center;
  margin-right: 4rem;
`

export const UpArrow = styled.span`
  font-size: 4rem;
`
