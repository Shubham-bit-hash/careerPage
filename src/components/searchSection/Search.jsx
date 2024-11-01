
import React, { useContext, useState } from "react";
import { BioContext } from "../ContextAPI";

function Search({ onFilter }) {
  const [searchInput, setSearchInput] = useState("");
  const [selectedContract, setSelectedContract] = useState("");
  const [showRemoteJobs, setShowRemoteJobs] = useState(false);
  const { theme, setTheme } = useContext(BioContext);


  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleContractChange = (e) => {
    setSelectedContract(e.target.value);
  };

  const handleRemoteJobsChange = (e) => {
    setShowRemoteJobs(e.target.checked);
  };

  const handleFilter = () => {
    onFilter(searchInput, selectedContract, showRemoteJobs);
  };

  return (
    <section className="w-[25%] xs:w-full md:w-[35%] ">
      <div className={`border-[1px] p-3 rounded-xl ${theme?"bg-[#212121a8] border-[#555555]":"bg-[#ffffffa8] border-gray-200"} backdrop-blur-index`}>
        <div>
          <label htmlFor="title" className={`font-semibold ${theme?"text-white":"text-black"}`}>
            Find your perfect role
          </label>
          <input
            value={searchInput}
            onChange={handleSearchInputChange}
            type="text"
            name="title"
            id="title"
            placeholder="Search by role, Keywords, etc."
            className={`border-[1px] rounded-md py-2 px-2  w-full mt-1 ${theme?"bg-[#121212] border-[#555555] text-white":"bg-white text-black outline-gray-300"}`}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="types" className={`font-semibold ${theme?"text-white":"text-black"}`}>
            Type
          </label>
          <select
            name="types"
            id="types"
            value={selectedContract}
            onChange={handleContractChange}
            className={`border-[1px] rounded-md py-2 px-2 w-full mt-2 ${theme?"bg-[#121212] border-[#555555] text-white":"bg-white text-black outline-gray-300"}`}
          >
            <option value="">All types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        {/* <div className="mt-5">
          <label htmlFor="locations" className="font-semibold">
            {" "}
            Location
          </label>
          <select
            name="locations"
            id=""
            className="border-[1px] rounded-md py-2 px-2 outline-gray-300 w-full mt-1"
          >
            <option value="">All locations</option>
            <option value="bangalore">Bangalore, India</option>
            <option value="mumbai">Mumbai, India</option>
            <option value="delhi">Delhi, India</option>
            <option value="chennai">Chennai, India</option>
            <option value="hyderabad">Hyderabad, India</option>
            <option value="pune">Pune, India</option>
            <option value="kolkata">Kolkata, India</option>
            <option value="gurugram">Gurugram, India</option>
            <option value="ahmedabad">Ahmedabad, India</option>
            <option value="noida">Noida, India</option>
            <option value="jaipur">Jaipur, India</option>
            <option value="chandigarh">Chandigarh, India</option>
            <option value="kochi">Kochi, India</option>
            <option value="indore">Indore, India</option>
            <option value="lucknow">Lucknow, India</option>
            <option value="colombo">Colombo, Sri Lanka</option>
            <option value="kathmandu">Kathmandu, Nepal</option>
            <option value="dhaka">Dhaka, Bangladesh</option>
            <option value="thimphu">Thimphu, Bhutan</option>
            <option value="male">Male, Maldives</option>
          </select>
        </div> */}
        <div className="my-3">
          <input
            type="checkbox"
            name="remoteJobs"
            id="remoteJobs"
            checked={showRemoteJobs}
            onChange={handleRemoteJobsChange}
            className="mr-2"
          />
          <label htmlFor="remoteJobs" className={`font-semibold ${theme?"text-white":"text-black"}`}>Remote jobs</label>
        </div>
        <button
          onClick={handleFilter}
          className={`w-full py-2 ${theme?"bg-[#292929]":"bg-[#0F172A]"} text-white rounded-lg hover:bg-[#1b2742] duration-500`}
        >
          Filter jobs
        </button>
      </div>
    </section>
  );
}

export default Search;
