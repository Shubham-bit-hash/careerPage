import React from "react";
import { NavLink } from "react-router-dom";

function DiscComp({
  title,
  company,
  location,
  jobType,
  roleOverview,
  skills,
  BonusSkills,
  WeOffer,
}) {
  return (
    <section>
      <div className=" mx-36 mt-10 xs:mx-4 xs:mt-6 md:mx-20 md:mt-10 lg:mx-36 lg:mt-10">
        <h2 className="font-semibold text-xl">Job Title: {title}</h2>
        <div className="my-5">
          <div>
            <span className="font-medium">Company:</span> {company}
          </div>
          <div>
            <span className="font-medium">Location:</span> {location}
          </div>
          <div>
            <span className="font-medium">Type:</span> {jobType}
          </div>
        </div>
        <h3 className="font-semibold text-lg">About Us:</h3>
        <p className="my-4 text-gray-700">
          At PayME, our mission is to transform the financial landscape by
          delivering secure, transparent, and decentralized payment solutions
          through the power of blockchain technology. We strive to build a world
          where every transaction is safe, seamless, and trustworthy—empowering
          businesses and individuals to take full control of their financial
          activities.
        </p>
        <h3 className="font-semibold text-lg">Role Overview:</h3>
        <p className="my-4 text-gray-700">{roleOverview}</p>

        <h3 className="font-semibold text-lg">Key Skills:</h3>
        <ul className="my-4 list-disc px-16 text-gray-700 xs:px-8 md:pl-16">
          {skills.map((item, index) => {
            return (
              <li key={index}>
                <span className="font-semibold text-black">{item.span} </span>
                {item.li}
              </li>
            );
          })}
        </ul>
        <h3 className="font-semibold text-lg">Perks:</h3>
        <ul className="my-4 list-disc px-16 text-gray-700 xs:px-8 md:pl-16">
          {WeOffer.map((item, index) => {
            return <li key={index}>{item.li}</li>;
          })}
        </ul>
        <h3 className="font-semibold text-lg">Bonus Skills:</h3>
        <ul className="my-4 list-disc px-16 text-gray-700 xs:px-8 md:pl-16">
          {BonusSkills.map((item, index) => {
            return <li key={index}>{item.li}</li>;
          })}
        </ul>
        <div className="w-full m-auto flex justify-center items-center">
          <NavLink to="/job-form">
            <button className="bg-[#93C47D] py-2 px-6 text-2xl font-bold  my-5 mt-4 hover:bg-[#b3e29d] duration-500">
              Apply
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default DiscComp;
