import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from 'react-moralis'



ReactDOM.render(
  <BrowserRouter>
    <MoralisProvider
      serverUrl={process.env.REACT_APP_SERVER_URL ?? ''}
      appId={process.env.REACT_APP_APPLICATION_ID ?? ''}
    > 
      <App /> 
    </MoralisProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
