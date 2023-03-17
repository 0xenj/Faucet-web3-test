import ButtonConnect from "./ButtonConnect";
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="flex flex-row">
        <div className="basis-1/8 pl-5">
          <a className="title-font font-medium items-center text-black mb-4 md:mb-0">
            <img className="h-20 w-32 rounded-full hover:scale-125 transition duration-300 ease-out" src="cookiees.png"></img>
          </a>
        </div>
        <div className="basis-1/8 pt-5">
          <span className="font-bold ml-2 text-3xl text-yellow-900">Cookiees</span>
        </div>
        <div className="basis-2/3 pt-20 ml-32 mr-8">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-10 text-yellow-900 font-semibold hover:font-bold hover:underline">Faucet</Link>
            <Link to="/mint-your-access" className="mr-10 text-yellow-900 font-semibold hover:font-bold hover:underline">Mint your access</Link>
            <Link to="/welcome" className="mr-10 text-yellow-900 font-semibold hover:font-bold hover:underline">Welcome</Link>
          </nav>
        </div>
        <div className="basis-1/4 pt-5">
          <ButtonConnect />
        </div>
      </div>
    );
  };
  
  export default Navbar;
  