import { ConnectButton } from "@rainbow-me/rainbowkit";

const ButtonConnect = () => {
  return (
    <div>
      <ConnectButton
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </div>
  );
};

export default ButtonConnect;
