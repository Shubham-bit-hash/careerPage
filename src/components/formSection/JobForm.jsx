import React, { useState } from "react";

function JobForm() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    email: "",
    portfolio: "",
    state: "",
    city: "",
    fullAddress: "",
    resume: "",
    coverLetter: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormData = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <section>
      <form action="" onSubmit={handleFormData}>
        <div className="mx-36 my-10 xs:mx-5 xs:my-5 md:mx-16 md:my-10 lg:mx-36">
          <h1 className="text-3xl xs:text-xl ">we’re committed to innovation and empowering our team to shape the future of finance. We appreciate your interest and look forward to the possibility of working together.</h1>
          <h2 className="text-2xl font-bold">Empowering Payments, Enabling Growth.</h2>
          <div className="flex justify-between items-center gap-32 xs:block md:flex md:gap-20 lg:gap-32" >
            <div className="my-5 mt-7 flex justify-center items-center w-1/2 xs:w-full md:w-1/2">
              <label htmlFor="firstName" className="text-xl w-48">
                First Name:
              </label>
              <input
                type="text"
                value={inputValue.firstName}
                onChange={handleInputChange}
                required
                name="firstName"
                id="firstName"
                className="bg-[#fbfbfb87] border-b-2 border-pink-300 w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
              />
            </div>
            <div className="my-5 mt-7 flex justify-center items-center w-1/2 xs:w-full md:w-1/2">
              <label className="text-xl w-48" htmlFor="lastName">
                Last Name:
              </label>
              <input
                type="text"
                value={inputValue.lastName}
                onChange={handleInputChange}
                required
                name="lastName"
                className="bg-[#fbfbfb87] border-b-2 border-pink-300 w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
                id="lastName"
              />
            </div>
          </div>

          <div className="flex  justify-between items-center gap-32 xs:block md:flex md:gap-20 lg:gap-32">
            <div className="my-5 mt-7 flex justify-center items-center w-1/2 xs:w-full md:w-1/2">
              <label className="text-xl  w-32 " htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={inputValue.email}
                onChange={handleInputChange}
                required
                className="bg-[#fbfbfb87] border-b-2 border-pink-300 w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
                id="email"
              />
            </div>
            <div className="my-5 mt-7 flex justify-center items-center w-1/2 xs:w-full md:w-1/2">
              <label className="text-xl  w-72 " htmlFor="phoneNumber">
                Phone Number:
              </label>
              <input
                type="number"
                name="phoneNumber"
                value={inputValue.phoneNumber}
                onChange={handleInputChange}
                required
                className="bg-[#fbfbfb87] border-b-2 border-pink-300 w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
                id="phoneNumber"
              />
            </div>
          </div>

          <div className="my-5 mt-7 flex justify-center items-center">
            <label className="text-xl  w-40 " htmlFor="jobTitle">
              Job Title:
            </label>
            <input
              type="text"
              value={inputValue.jobTitle}
              onChange={handleInputChange}
              required
              name="jobTitle"
              className="bg-[#fbfbfb87] border-b-2 border-pink-300 w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
              id="jobTitle"
            />
          </div>

          <div className="flex  justify-between items-center gap-36 xs:block md:flex md:gap-20 lg:gap-32">
            <div className="my-5 mt-7 flex justify-center items-center w-1/2 xs:w-full md:w-1/2">
              <label className="text-xl  w-28 " htmlFor="state">
                State:
              </label>
              <input
                type="text"
                value={inputValue.state}
                onChange={handleInputChange}
                required
                name="state"
                className="bg-[#fbfbfb87] border-b-2 border-pink-300 w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
                id="state"
              />
            </div>
            <div className="my-5 mt-7 flex justify-center items-center w-1/2 xs:w-full md:w-1/2">
              <label className="text-xl  w-28 " htmlFor="city">
                City:
              </label>
              <input
                type="text"
                value={inputValue.city}
                onChange={handleInputChange}
                required
                name="city"
                className="bg-[#fbfbfb87] border-b-2 border-pink-300 w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
                id="city"
              />
            </div>
          </div>
          <div className="my-5 mt-7 flex justify-center items-center">
            <label className="text-xl  w-40 " htmlFor="fullAddress">
              Address:
            </label>
            <input
              type="text"
              value={inputValue.fullAddress}
              onChange={handleInputChange}
              required
              name="fullAddress"
              className="bg-[#fbfbfb87] border-b-2 border-pink-300 w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
              id="fullAddress"
            />
          </div>

          <div className="flex  justify-between items-center gap-32 xs:block md:flex md:gap-20 lg:gap-32">
            <div className="my-5 mt-7 flex justify-center items-center w-1/2 xs:w-full md:w-1/2">
              <label className="text-xl  w-48 " htmlFor="resume">
                Add Resume:
              </label>
              <input
                type="file"
                value={inputValue.resume}
                onChange={handleInputChange}
                required
                name="resume"
                id="resume"
                className="bg-[#fbfbfb87] w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
              />
            </div>
            <div className="my-5 mt-7 flex justify-center items-center  w-1/2 xs:w-full md:w-1/2">
              <label className="text-xl  w-44" htmlFor="coverLetter">
                Add Cover:
              </label>
              <input
                type="file"
                value={inputValue.coverLetter}
                onChange={handleInputChange}
                name="coverLetter"
                id="coverLetter"
                className="bg-[#fbfbfb87]  w-full py-2 px-4 text-lg outline-none focus:border-pink-500"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-12">
            <button
              type="submit"
              className="border-2 p-3 text-xl rounded-xl px-10"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default JobForm;
