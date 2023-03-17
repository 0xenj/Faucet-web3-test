import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from 'react';

const ButtonConnect = () => {
  return (
    <div>
      <ConnectButton chainStatus="icon" showBalance={false} />
    </div>
  );
};

export default ButtonConnect;
