import styled from 'styled-components'

export const TransactionsList = styled.div`
  height: 80vh;
  min-width: 60vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    width: 90%;
  }
`

export const TransactionsListHeader = styled.h1`
  text-align: center;
  padding: 4rem 0;
  font-size: 3rem;
`

export const List = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`

export const TransactionsCount = styled.div`
  font-size: 2rem;
  padding: 1rem 0;
  text-align: center;
`
