// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const JobDisc = () => {
//   const { jobId } = useParams();
//   const [job, setJob] = useState(null);

//   useEffect(() => {
//     fetch(
//       "https://raw.githubusercontent.com/Shubham-bit-hash/Assets/main/job_postings.json"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const jobData = data.find((job) => job.jobId === jobId);
//         setJob(jobData);
//       })
//       .catch((error) => console.error("Error fetching job:", error));
//   }, [jobId]);

//   if (!job) return <div>Loading...</div>;

//   return (
//     <section>
//       <div className=" mx-36 mt-10 xs:mx-4 xs:mt-28 md:mx-20 md:mt-32 lg:mx-36">
//         <h1 className="font-semibold text-xl">Job Title: {job.title}</h1>
//         {/* <p>Company: {job.company}</p> */}
//         <div className="my-5">
//           <div>
//             <span className="font-medium">Company:</span> {job.company}
//           </div>
//           <div>
//             <span className="font-medium">Location:</span> {job.location}
//           </div>
//           <div>
//             <span className="font-medium">Type:</span> {job.type}
//           </div>
//         </div>
//         <h3 className="font-semibold text-lg">About Us:</h3>
//         <p className="my-4 text-gray-700">{job.about_us}</p>
//         <h3 className="font-semibold text-lg">Role Overview:</h3>
//         <p className="my-4 text-gray-700">{job.role_overview}</p>

//         <h3 className="font-semibold text-lg">Key Skills:</h3>
//         <ul className="my-4 list-disc px-16 text-gray-700 xs:px-8 md:pl-16">
//           {job.skills.map((skill,index) => {
//             return (
//               <li key={index}>
//                 <span className="font-semibold text-semibold">{skill}</span>
//               </li>
//             );
//           })}
//         </ul>
//         <h3 className="font-semibold text-lg">Bouns Skills:</h3>
//         <ul className="my-4 list-disc px-16 text-gray-700 xs:px-8 md:pl-16">
//           {job.bonus_skills.map((bouns,index) => {
//             return <li key={index}>{bouns}</li>;
//           })}
//         </ul>
//         <h3 className="font-semibold text-lg">Perks:</h3>
//         <ul className="my-4 list-disc px-16 text-gray-700 xs:px-8 md:pl-16">
//           {job.perks.map((perk,index) => {
//             return <li key={index}>{perk}</li>;
//           })}
//         </ul>
//         <div className="w-full m-auto flex justify-center items-center">
//           <button className="bg-[#93C47D] py-2 px-6 text-2xl font-bold  my-5 mt-4 hover:bg-[#b3e29d] duration-500">
//             Apply
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JobDisc;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDisc = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Shubham-bit-hash/Assets/main/job_postings.json"
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
        <h1 className="font-semibold text-xl">Job Title: {job.title}</h1>
        <div className="my-5">
          <div>
            <span className="font-medium">Company:</span> {job.company}
          </div>
          <div>
            <span className="font-medium">Location:</span> {job.location}
          </div>
          <div>
            <span className="font-medium">Type:</span> {job.type}
          </div>
        </div>
        <h3 className="font-semibold text-lg">About Us:</h3>
        <p className="my-4 text-gray-700">{job.about_us}</p>
        <h3 className="font-semibold text-lg">Role Overview:</h3>
        <p className="my-4 text-gray-700">{job.role_overview}</p>

        <h3 className="font-semibold text-lg">Key Skills:</h3>
        <ul className="my-4 list-disc px-16 text-gray-700 xs:px-8 md:pl-16">
          {job.skills.map((skill, index) => (
            <li key={index}>
              <span className="font-semibold text-semibold">{skill}</span>
            </li>
          ))}
        </ul>
        <h3 className="font-semibold text-lg">Bonus Skills:</h3>
        <ul className="my-4 list-disc px-16 text-gray-700 xs:px-8 md:pl-16">
          {job.bonus_skills.map((bonus, index) => (
            <li key={index}>{bonus}</li>
          ))}
        </ul>
        <h3 className="font-semibold text-lg">Perks:</h3>
        <ul className="my-4 list-disc px-16 text-gray-700 xs:px-8 md:pl-16">
          {job.perks.map((perk, index) => (
            <li key={index}>{perk}</li>
          ))}
        </ul>
        <div className="w-full m-auto flex justify-center items-center ">
          <div  className="bg-[#93C47D] text-gray-700 py-2 px-6 text-2xl font-bold  my-5 mt-4 hover:bg-[#b3e29d] duration-500">

          <ButtonMailto
            label="Apply"
            mailto={`mailto:emailjanhavitripathi@gmail.com?subject=Applying for ${job.title}&body=Dear Applicant%0D%0A%0D%0AI hope you're doing well, kindly provide the following information for our records:%0D%0A%0D%0A1.FUll Name:%0D%0A2.Phone:%0D%0A3.Links to your professional work profiles%0D%0A4.Attach An Updated Resume.%0D%0A%0D%0AWe appreciate your prompt response and look forward to reviewing your details. Please don't hesitate to reach out if you have any questions.%0D%0A%0D%0A Thank you. `}
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default JobDisc;
