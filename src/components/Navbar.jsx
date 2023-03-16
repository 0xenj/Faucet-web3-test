import ButtonConnect from "./ButtonConnect";
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div class="flex flex-row">
        <div class="basis-1/8 pl-5">
          <a class="title-font font-medium items-center text-black mb-4 md:mb-0">
            <img class="h-20 w-20 rounded-full hover:scale-125 transition duration-300 ease-out" src="cookiees.png"></img>
          </a>
        </div>
        <div class="basis-1/8 pt-5">
          <span class="font-bold ml-2 text-3xl text-yellow-900">Cookiees</span>
        </div>
        <div class="basis-2/3 pt-20 ml-32 mr-8">
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-10 text-yellow-900 font-semibold hover:font-bold hover:underline">Faucet</Link>
            <Link to="/mint-your-access" class="mr-10 text-yellow-900 font-semibold hover:font-bold hover:underline">Mint your access</Link>
            <Link to="/welcome" class="mr-10 text-yellow-900 font-semibold hover:font-bold hover:underline">Welcome</Link>
          </nav>
        </div>
        <div class="basis-1/4 pt-5">
          <ButtonConnect />
        </div>
      </div>
    );
  };
  
  export default Navbar;
  