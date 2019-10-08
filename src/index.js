import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./configureStore";
const initialState = {};
const history = createBrowserHistory();
const store = configureStore(history, initialState);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
//If you want your app to work offline and load faster, you can change
//unregister() to register() below. Note this comes with some pitfalls.
//Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
