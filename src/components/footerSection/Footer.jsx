import React, { useContext } from 'react'
import { BioContext } from '../ContextAPI';

function Footer() {
  const { theme, setTheme } = useContext(BioContext);  

  return (
    <footer>
        <div className={`mt-5 py-6 ${theme?"bg-[#222] text-white":"bg-[#F3F4F6] text-gray-500"} text-center text-sm xs:py-3 xs:text-xs mg:py-6 xs:px-3 md:text-base`}>
            <span className='hover:underline cursor-pointer'>Disclaimer</span><span> | </span>
            <span className='hover:underline cursor-pointer'>&copy; Copyright@BITPayme Technology Pvt Ltd | </span>
            <span className='hover:underline cursor-pointer'>Privacy Policy</span>
        </div>
    </footer>
  )
}

export default Footer