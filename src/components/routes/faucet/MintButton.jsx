import React from "react";

const MintButton = ({ onClick }) => {

  return (
    <button className="mt-20 w-32 h-10 rounded-md bg-yellow-700 text-white font-bold hover:text-yellow-700 hover:bg-white hover:border-2 border-yellow-700" onClick={onClick}>
      Mint COOK
    </button>

  );
};
  
  export default MintButton;