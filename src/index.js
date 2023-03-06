import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider } = configureChains([mainnet], [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});





ReactDOM.render(
  <BrowserRouter>
    <MoralisProvider
      serverUrl={process.env.REACT_APP_SERVER_URL ?? ""}
      appId={process.env.REACT_APP_APPLICATION_ID ?? ""}
    >
     
     <WagmiConfig client={client}>
      

        <App />

        
        </WagmiConfig>
   
    </MoralisProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
