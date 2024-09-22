import React, { useState } from "react";
import Search from "./Search";
import Post from "./Post";
import Circle from "../../assets/Circle.svg";
import Star from "../../assets/Star.svg";
import Polygon from "../../assets/Polygon.svg";
import Polygon2 from "../../assets/Polygon2.svg";
import Main from "../MainSection/Main";

function SearchAllAccess() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedContract, setSelectedContract] = useState("");
  const handleFilter = (search, contract) => {
    setSearchInput(search);
    setSelectedContract(contract);
  };
  return (
    <div>
      <Main />
      <div
        className={`px-28 flex justify-between w-full gap-4 overflow-hidden xs:px-2 xs:block md:flex lg:px-28 `}
      >
        <img
          src={Circle}
          className="absolute -z-[1]  -top-10 left-40 xs:top-[38px] xs:-left-[30px] md:-left-[50px] md:w-[37%] lg:-top-20 lg:left-32 lg:w-[32%]"
          alt=""
        />
        <img
          src={Star}
          className="absolute -z-[1] top-32 w-[12%] right-28 xs:right-2 md:top-[12%] md:right-0 lg:top-32 lg:right-28"
          alt=""
        />
        <img
          src={Polygon}
          className="absolute -z-[1] top-[40%] w-[12%] left-32 xs:top-[30%] xs:left-0 md:top-[40%] lg:top-[40%] lg:left-32"
          alt=""
        />
        <img
          src={Polygon2}
          className="absolute -z-[1] top-[40%] w-1/4 right-28 xs:right-[20px] xs:top-[19%] md:top-[43%] lg:top-[40%] lg:right-28"
          alt=""
        />
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onFilter={handleFilter}
        />
        <Post searchInput={searchInput} selectedContract={selectedContract} />
      </div>
    </div>
  );
}

export default SearchAllAccess;
