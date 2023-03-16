import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "./Navbar";
import MintButton from "./MintButton";
import Text from "./Text";

const { chains, provider } = configureChains(
  [mainnet, polygon, goerli, optimism, arbitrum],
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
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: "#A0522D",
          accentColorForeground: "white",
        })}
        chains={chains}
      >
        <Navbar />
        <div className="flex justify-center mt-20">
          <MintButton>Mint</MintButton>
        </div>
        <div>
          <Text />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
