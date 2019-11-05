import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./App";
import Modal from "./components/modal/modal";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddTransaction from "./components/add-transaction/add-transaction";

import reducers from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
      <Route path="/addTransition" component={AddTransaction} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
