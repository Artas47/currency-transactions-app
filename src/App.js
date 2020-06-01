import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import TransactionsList from './components/transactions-list/transactions-list'
import TopTransaction from './components/top-transaction/top-transaction'
import Predictor from './components/predictor/predictor'
import * as Styles from './App.styles'
import CustomButton from './components/custom-button/custom-button'

const App = () => {
  return (
    <Styles.AppContainer>
      <TransactionsList />
      <Styles.SideBar>
        <Predictor />
        <Link style={{textDecoration: 'none'}} to="addTransaction">
          <CustomButton add>Add Transaction</CustomButton>
        </Link>
        <TopTransaction />
      </Styles.SideBar>
    </Styles.AppContainer>
  )
}

export default App
