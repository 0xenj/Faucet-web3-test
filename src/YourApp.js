import { ConnectButton } from "@rainbow-me/rainbowkit";

export const YourApp = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ConnectButton
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </div>
  );
};

export default YourApp;
