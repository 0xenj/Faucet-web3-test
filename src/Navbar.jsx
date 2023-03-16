import ButtonConnect from "./components/ButtonConnect";

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
        <div class="basis-2/3 pt-20">
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-10 text-yellow-900 font-semibold hover:font-bold hover:underline">Faucet</a>
            <a class="mr-10 text-yellow-900 font-semibold hover:font-bold hover:underline">Mint your access</a>
            <a class="mr-10 text-yellow-900 font-semibold hover:font-bold hover:underline">Welcome</a>
          </nav>
        </div>
        <div class="basis-1/6 pt-5 pl-10">
          <ButtonConnect />
        </div>
      </div>
    );
  };
  
  export default Navbar;
  