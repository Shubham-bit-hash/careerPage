import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {BioContext} from "../ContextAPI"

const JobDisc = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const { theme, setTheme } = useContext(BioContext);  


  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Bitpayme-technology-sol/jobs/refs/heads/main/jobs.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const jobData = data.find((job) => job.jobId === jobId);
        setJob(jobData);
      })
      .catch((error) => console.error("Error fetching job:", error));
  }, [jobId]);

  if (!job) return <div>Loading...</div>;

  const ButtonMailto = ({ mailto, label }) => {
    return (
      <a
        href={mailto}
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </a>
    );
  };

  return (
    <section>
      <div className=" mx-36 mt-10 xs:mx-4 xs:mt-28 md:mx-20 md:mt-32 lg:mx-36">
        <h1 className={`font-semibold text-xl ${theme?"text-white":""
        }`}>Job Title: {job.title}</h1>
        <div className={`my-5 ${theme?"text-white":""}`}>
          <div>
            <span className="font-medium">Experience</span> {job.Experience}
          </div>
          <div>
            <span className="font-medium">Location:</span> {job.location}
          </div>
          <div>
            <span className="font-medium">Type:</span> {job.type}
          </div>
        </div>
        <h3 className={`font-semibold text-lg ${theme?"text-white":""}`}>About Us:</h3>
        <p className={`my-4  ${theme?"text-gray-300":"text-gray-700"}`}>{job.about_us}</p>
        <h3 className={`font-semibold text-lg ${theme?"text-white":""}`}>Role Overview:</h3>
        <p className={`my-4  ${theme?"text-gray-300":"text-gray-700"}`}>{job.role_overview}</p>

        <h3 className={`font-semibold text-lg ${theme?"text-white":""}`}>Key Skills:</h3>
        <ul className={`my-4 list-disc px-16 xs:px-8 md:pl-16 ${theme?"text-gray-300":"text-gray-700"}`}>
          {job.skills.map((skill, index) => (
            <li key={index}>
              <span className="font-semibold text-semibold">{skill}</span>
            </li>
          ))}
        </ul>
        <h3 className={`font-semibold text-lg ${theme?"text-white":""}`}>Bonus Skills:</h3>
        <ul className={`my-4 list-disc px-16 xs:px-8 md:pl-16 ${theme?"text-gray-300":"text-gray-700"}`}>
          {job.bonus_skills.map((bonus, index) => (
            <li key={index}>{bonus}</li>
          ))}
        </ul>
        <h3 className={`font-semibold text-lg ${theme?"text-white":""}`}>Perks:</h3>
        <ul className={`my-4 list-disc px-16 xs:px-8 md:pl-16 ${theme?"text-gray-300":"text-gray-700"}`}>
          {job.perks.map((perk, index) => (
            <li key={index}>{perk}</li>
          ))}
        </ul>
        <div className="w-full m-auto flex justify-center items-center ">
          <div
            className="uppercase  rounded-md bg-[#5e16bd] text-white cursor-pointer  py-4 px-20 text-2xl font-semibold  my-5 mt-4 hover:bg-gray-300 duration-500 hover:shadow-custom"
            style={{
              backgroundImage: "linear-gradient(90deg, #501aa8, #870de8)",transition: "all 0.3s ease-in-out",
            }}
          >
            <ButtonMailto
              label="Apply"
              mailto={`mailto:sending_resume@paymefin.tech?subject=Applying for ${job.title}&body=Dear Applicant%0D%0A%0D%0AI hope you're doing well, kindly provide the following information for our records:%0D%0A%0D%0A1.Full Name:%0D%0A2.Phone:%0D%0A3.Links to your professional work profiles%0D%0A4.Attach An Updated Resume.%0D%0A%0D%0AWe appreciate your prompt response and look forward to reviewing your details. Please don't hesitate to reach out if you have any questions.%0D%0A%0D%0A Thank you. `}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDisc;
