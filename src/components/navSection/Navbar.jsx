// import React, { useState } from "react";
import Logo from "../../assets/BG Logo/White BG Logo.png";

// function Navbar() {
//   const [humBurgur, setHumBurgur] = useState(false)
//   const handleHumBurgur =(e)=>{
//     e.preventDefault();
//     setHumBurgur(!humBurgur)
//   }
//   return (
//     // <nav>
//     //     <div classNameName='flex justify-between items-center bg-white px-28 border-b-[1px] xs:px-1 xs:w-full lg:px-28'>
//     //         <div classNameName="logo">
//     //             <img src={Logo} classNameName='w-44 xs:w-32 lg:w-44' alt="" />
//     //         </div>

//     //     </div>
//     // </nav>
//     <nav className="fixed top-4 left-4 right-4 p-4 bg-white h-auto max-w-full bg-opacity-70 backdrop-blur-md border border-black flex items-center justify-between z-50 rounded-full">
//       <div className="text-lg font-bold text-black">
//         <a href="/">
//           <img className="h-10 w-auto" src={Logo} alt="Logo" />
//         </a>
//       </div>
//       <div className={` md:flex space-x-6 xs:flex-col xs:items-center xs:justify-center xs:absolute xs:right-3 xs:top-[70px] lg:flex-row lg:items-[unset] lg:justify-[unset] lg:absolute lg:right-[unset] lg:top-[unset] ${humBurgur?"flex":"hidden"}`}>
//         <a className="text-black hover:text-gray-800" href="/">
//           Home
//         </a>
//         <a className="text-black hover:text-gray-800" href="/about">
//           About
//         </a>
//         <a className="text-black hover:text-gray-800" href="/contact">
//           Contact
//         </a>
//       </div>
//       <button className="px-4 py-2 border border-black text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 hidden md:block">
//         Login/Register
//       </button>
//       <div className="md:hidden">
//         <button className="text-black focus:outline-none" onClick={handleHumBurgur}>
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    // Redirect to external URL
    window.location.href = 'https://app.paymefin.tech/';
  };

  return (
    <nav className="fixed top-4 left-4 right-4 p-4 bg-white h-auto max-w-full bg-opacity-70 backdrop-blur-md border border-black flex items-center justify-between z-50 rounded-full">
      {/* Logo or Brand Name */}
      <div className="text-lg font-bold text-black">
        <Link to="/">
          <img className='h-10 w-auto' src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Navigation Links (Desktop) */}
      {/* <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-black hover:text-gray-800">Home</Link>
        <Link to="/about" className="text-black hover:text-gray-800">About</Link>
        <Link to="/contact" className="text-black hover:text-gray-800">Contact</Link>
      </div> */}

      {/* Login/Register Button */}
      <button
        onClick={handleLoginClick} // Use handler to redirect
        className="px-4 py-2 border border-black text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 hidden md:block"
      >
        {/* Login/Register */}
      </button>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {/* Hamburger Icon */}
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
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white border border-black rounded-lg p-4 space-y-4 flex flex-col items-start z-50">
          <Link to="/" onClick={toggleMenu} className="text-black hover:text-gray-800">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="text-black hover:text-gray-800">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-black hover:text-gray-800">Contact</Link>
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