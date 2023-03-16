import React from 'react';
import MintButton from "./faucet/MintButton";
import Text from "./faucet/Text";
import { ethers } from "ethers";
const contractAbi = require('./abi');

function Faucet() {

  const contractAddress = "0x0C178D3dCb53E6287Bb7028D5C830394f1b79FC8";

  const providerEth = new ethers.providers.Web3Provider(window.ethereum);
  const signer = providerEth.getSigner();

  const handleMintClick = async () => {
    try {
      const mintContract = new ethers.Contract(contractAddress, contractAbi, signer);
      const tx = await mintContract.mint();
      console.log(tx);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-20">
        <MintButton onClick={handleMintClick} >Mint</MintButton>
      </div>
      <div>
        <Text />
      </div>
    </div>
  );
}

export default Faucet;