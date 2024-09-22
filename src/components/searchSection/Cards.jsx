import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { NavLink } from "react-router-dom";

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
  return (
    <NavLink
      to={link}
      className="flex py-6 px-5 rounded-xl justify-between  border-[1px] xs:block md:flex cursor-pointer hover:bg-gray-100 duration-500 backdrop-blur-index"
    >
      <div className="h-[20vh] flex items-center gap-4 ">
        {/* <div className="">
          <img src={img} className="w-32 xs:w-28 lg:w-32" alt="laptop image" />
        </div> */}
        <div>
          <h2 className="text-[1.4rem] font-semibold xs:text-lg lg:text-[1.4rem]">
            {postName}
          </h2>
          <div className="mt-3 text-[#94748B] font-medium ">
            <p className="flex items-center gap-1">
              <span>
                <IoLocationOutline />
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
      <div className="flex flex-col justify-between xs:justify-end xs:text-xs md:justify-between lg:text-base">
        <p className=" border-[1px] text-center p-1 px-3 rounded-lg bg-[#ebe8e8] text-[#64748B] font-semibold xs:hidden md:block">
          {Contract}
        </p>
        <p className="flex items-center gap-1 text-[#94748B] font-medium xs:mt-4 lg:mt-0 md:mt-0">
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
