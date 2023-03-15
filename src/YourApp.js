import { ConnectButton } from "@rainbow-me/rainbowkit";

export const YourApp = () => {
  return (
    <div
      style={{
        width: "180vw",
        height: "15vh",
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
