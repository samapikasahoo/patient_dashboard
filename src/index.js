import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { GlobalContextProvider } from "./components/GlobalContext";

ReactDOM.render(
  <HashRouter>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, change
// unregister() to register(). Note this comes with some pitfalls.
// Learn more: https://bit.ly/CRA-PWA
serviceWorker.unregister();
