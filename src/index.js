import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import {BrowserRouter, Route} from 'react-router-dom'
import App from './App'
import AddTransactionForm from './components/add-transaction-form/add-transaction-form'
import reducers from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware()))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/">
        <App />
      </Route>
      <Route path="/addTransaction">
        <AddTransactionForm />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
