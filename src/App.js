import React from 'react'
import './App.css'
import styled from 'styled-components'
import TransactionsList from './components/transactions-list/transactions-list'
import AddTransactionButton from './components/add-transaction-button/add-transaction-button'
import TopTransaction from './components/top-transaction/top-transaction'
import Predictor from './components/predictor/predictor'

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const App = () => {
  return (
    <AppContainer>
      <TransactionsList />
      <SideBar>
        <Predictor />
        <AddTransactionButton />
        <TopTransaction />
      </SideBar>
    </AppContainer>
  )
}

export default App
