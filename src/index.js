import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <BrowserRouter>
    <MoralisProvider
      serverUrl= 'gearfi-server-production.up.railway.app/server'
      appId= '001'
    >
      <App />
    </MoralisProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
