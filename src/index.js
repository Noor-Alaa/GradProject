import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import HostContextProvider from "./components/store/store";

ReactDOM.render(
  <HostContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HostContextProvider>,
  document.getElementById("root")
);
