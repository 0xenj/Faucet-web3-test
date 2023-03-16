import React from "react";

const Balance = ({ onClick }) => {

  return (
    <button className="mt-20 ml-10 w-32 h-10 rounded-md bg-yellow-700 text-white font-bold hover:text-yellow-700 hover:bg-white hover:border-2 border-yellow-700" onClick={onClick}>
      Get my Balance
    </button>

  );
};
  
  export default Balance;