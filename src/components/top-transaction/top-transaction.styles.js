import styled from 'styled-components'

export const TopTransaction = styled.div`
  background-color: white;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border: 2px solid darkgrey;
  width: 60rem;
  @media (max-width: 1500px) {
    width: 40rem;
  }
`

export const TopTransactionArrow = styled.span`
  font-size: 3rem;
`

export const TopTransactionHeader = styled.h2`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 2rem;
`

export const TopTransactionTitle = styled.h4``

export const TopTransactionAmountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TopTransactionAmountEur = styled.div``
export const TopTransactionAmountPln = styled.div`
  font-size: 2.5rem;
`

export const TopTransactionBox = styled.div`
  display: flex;
  padding: 5rem 0;
  align-items: center;
  font-size: 1.7rem;
  justify-content: space-around;
`

export const TopTransactionEmpty = styled.h3`
  font-size: 2rem;
  color: darkgrey;
`
