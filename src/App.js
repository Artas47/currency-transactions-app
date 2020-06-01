import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TransactionsList from './components/transactions-list/transactions-list'
import TopTransaction from './components/top-transaction/top-transaction'
import Predictor from './components/predictor/predictor'
import * as Styles from './App.styles'
import CustomButton from './components/custom-button/custom-button'
import AddTransactionForm from './components/add-transaction-form/add-transaction-form'

const App = () => {
  return (
    <Styles.AppContainer>
      <Router>
        <Route path="/">
          <TransactionsList />
          <Styles.SideBar>
            <Predictor />
            <Link style={{textDecoration: 'none'}} to="addTransaction">
              <CustomButton add>Add Transaction</CustomButton>
            </Link>
            <TopTransaction />
          </Styles.SideBar>
        </Route>
        <Route path="/addTransaction">
          <AddTransactionForm />
        </Route>
      </Router>
    </Styles.AppContainer>
  )
}

export default App
