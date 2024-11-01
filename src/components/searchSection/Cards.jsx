import React, { useContext } from "react";
import { FaAward } from "react-icons/fa6";
// import { IoLocationOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BioContext } from "../ContextAPI";

function Cards({
  // img,
  postName,
  typesLocation,
  workLocation,
  salary,
  jobPostTime,
  Contract,
  link,
}) {
  const { theme, setTheme } = useContext(BioContext);  
  // #D0D0D0
  // #C76ED7
  return (
    <NavLink
      to={link}
      className={`flex py-6 px-5 rounded-xl justify-between  border-[1px] ${theme?"border-[#555555] hover:bg-[#222222]":"border-[#E5E7EB] hover:bg-gray-100"} xs:block md:flex cursor-pointer duration-500 backdrop-blur-index `}
      // hover:scale-105
    >
      <div className="h-[20vh] flex items-center gap-4 ">
        {/* <div className="">
          <img src={img} className="w-32 xs:w-28 lg:w-32" alt="laptop image" />
        </div> */}
        <div>
          <h2 className={`text-[1.4rem] font-semibold xs:text-lg lg:text-[1.4rem] ${theme?"text-[#BE69CD]":"text-black"}`}>
            {postName}
          </h2>
          <div className={`mt-3 ${theme?"text-[#d1cfcf]":"text-[#94748B]"} font-medium `}>
            <p className="flex items-center gap-1">
              <span>
                <FaAward />
              </span>
              {typesLocation}
            </p>
            <p className="flex items-center gap-1">
              <span>
                <IoEarthOutline />
              </span>
              {workLocation}
            </p>
            <p className="flex items-center gap-1">
              <span>
                <FaMoneyCheckDollar />
              </span>
              {salary}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between xs:justify-end  xs:text-xs md:justify-between lg:text-base">
        <p className={` border-[1px] text-center p-1 px-3 rounded-lg ${theme?"bg-[#292929] text-[#d1cfcf] border-[#555555]":"border-[#E5E7EB] bg-[#ebe8e8] text-[#64748B]"}  font-semibold xs:hidden md:block`}>
          {Contract}
        </p>
        <p className={` ${theme?"text-[#d1cfcf]":"text-[#64748B]"} flex items-center gap-1 text-[#94748B] font-medium  lg:mt-0 md:mt-0`}>
          <span>
            <MdOutlineAccessTime />
          </span>
          {jobPostTime}
        </p>
      </div>
    </NavLink>
  );
}

export default Cards;
