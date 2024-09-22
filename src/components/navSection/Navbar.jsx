import React, { useState } from "react";
import Logo from "../../assets/BG Logo/White BG Logo.png";

function Navbar() {
  const [humBurgur, setHumBurgur] = useState(false)
  const handleHumBurgur =(e)=>{
    e.preventDefault();
    setHumBurgur(!humBurgur)
  }
  return (
    // <nav>
    //     <div classNameName='flex justify-between items-center bg-white px-28 border-b-[1px] xs:px-1 xs:w-full lg:px-28'>
    //         <div classNameName="logo">
    //             <img src={Logo} classNameName='w-44 xs:w-32 lg:w-44' alt="" />
    //         </div>

    //     </div>
    // </nav>
    <nav className="fixed top-4 left-4 right-4 p-4 bg-white h-auto max-w-full bg-opacity-70 backdrop-blur-md border border-black flex items-center justify-between z-50 rounded-full">
      <div className="text-lg font-bold text-black">
        <a href="/">
          <img className="h-10 w-auto" src={Logo} alt="Logo" />
        </a>
      </div>
      <div className={` md:flex space-x-6 ${humBurgur?"flex":"hidden"}`}>
        <a className="text-black hover:text-gray-800" href="/">
          Home
        </a>
        <a className="text-black hover:text-gray-800" href="/about">
          About
        </a>
        <a className="text-black hover:text-gray-800" href="/contact">
          Contact
        </a>
      </div>
      <button className="px-4 py-2 border border-black text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 hidden md:block">
        Login/Register
      </button>
      <div className="md:hidden">
        <button className="text-black focus:outline-none" onClick={handleHumBurgur}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
