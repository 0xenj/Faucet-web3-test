import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli, zhejiang } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Route, Routes } from 'react-router-dom';
import Faucet from './components/routes/Faucet';
import MintYourAccess from './components/routes/MintYourAccess';
import Welcome from './components/routes/Welcome';
import Navbar from "./components/Navbar";
import React from 'react';
import { BrowserRouter } from "react-router-dom";


const { chains, provider } = configureChains(
  [mainnet, polygon, goerli, optimism, arbitrum, zhejiang],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <BrowserRouter>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: "#A0522D",
          accentColorForeground: "white",
        })}
        chains={chains}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Faucet />} />
          <Route exact path="/mint-your-access" element={<MintYourAccess />} />
          <Route exact path="/welcome" element={<Welcome />} />
        </Routes>
      </RainbowKitProvider>
    </WagmiConfig>
    </BrowserRouter>
  );
}

export default App;
