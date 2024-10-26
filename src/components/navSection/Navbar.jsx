import React, { useCallback, useContext, useState } from "react";
import LogoWhite from "../../assets/BG Logo/White BG Logo.png";
import LogoBlack from "../../assets/BG Logo/Black BG Logo.png";
import { IoMoonSharp } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BioContext } from "../ContextAPI";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(BioContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    // Redirect to external URL
    window.location.href = "https://app.paymefin.tech/";
  };
  const handleTheme = (e) => {
    setTheme(!theme);
    let body = document.querySelector("body")
    body.style.transition="all 0.3s ease-in-out"
    if(theme){
      body.style.backgroundColor="#fff"
    }else{
      body.style.backgroundColor="#121212"
    }
  };

  return (
    <nav className={`fixed top-4 left-4 right-4 p-4 ${theme?"bg-[#292929]":"bg-white"} h-16 max-w-full bg-opacity-70 backdrop-blur-md border ${theme?"border-[#555555]":"border-black"} flex items-center justify-between z-50 rounded-full`}>
      {/* Logo or Brand Names */}
      <div>
        <h1 className={`md:text-lg md:ml-3 font-semibold ${theme?"text-white":"text-black"}`}>Jobs by PayME</h1>
      </div>
      <div className="flex justify-between items-center gap-10 mr-3">
        <div className="text-3xl" onClick={handleTheme}>
          {theme ? <IoMoonSharp className="text-white"/>:<FaSun/>}
        </div>
        <div className="text-lg font-bold text-black">
          <NavLink to="/">
            <img
              className="h-10 w-28 object-cover"
              src={theme?LogoBlack:LogoWhite}
              alt="Logo"
            />
          </NavLink>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      {/* <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-black hover:text-gray-800">
          Home
        </Link>
        <Link to="/about" className="text-black hover:text-gray-800">
          About
        </Link>
        <Link to="/contact" className="text-black hover:text-gray-800">
          Contact
        </Link>
      </div> */}

      {/* Login/Register Button */}
      {/* <button
        onClick={handleLoginClick} // Use handler to redirect
        className="px-4 py-2 border border-black text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 hidden md:block"
      >
        Login/Register
      </button> */}

      {/* Mobile Navigation (Hamburger Menu) */}
      {/* <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none"> */}
      {/* Hamburger Icon */}
      {/* <svg
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
            />
          </svg>
        </button>
      </div> */}

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white border border-black rounded-lg p-4 space-y-4 flex flex-col items-start z-50">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-black hover:text-gray-800"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-black hover:text-gray-800"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="text-black hover:text-gray-800"
          >
            Contact
          </Link>
          <button
            onClick={handleLoginClick} // Use handler to redirect
            className="px-4 py-2 border border-black text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 w-full"
          >
            Login/Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
