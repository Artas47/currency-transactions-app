import React from 'react'
import './App.css'
import TransactionsList from './components/transactions-list/transactions-list'
import AddTransactionButton from './components/add-transaction-button/add-transaction-button'
import TopTransaction from './components/top-transaction/top-transaction'
import Predictor from './components/predictor/predictor'
import * as Styles from './App.styles'

const App = () => {
  return (
    <Styles.AppContainer>
      <TransactionsList />
      <Styles.SideBar>
        <Predictor />
        <AddTransactionButton />
        <TopTransaction />
      </Styles.SideBar>
    </Styles.AppContainer>
  )
}

export default App
