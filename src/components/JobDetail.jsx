import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Shubham-bit-hash/Assets/main/job_postings.json')
      .then(response => response.json())
      .then(data => {
        const jobData = data.find(job => job.jobId === jobId);
        setJob(jobData);
      })
      .catch(error => console.error('Error fetching job:', error));
  }, [jobId]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>About us:{job.about_us}</p>
      <p>Company: {job.company}</p>
      <p>Date: {job.date}</p>
      <p>Salary: {job.salary}</p>
      <h2>Role Overview</h2>
      <p>{job.role_overview}</p>
      <h2>Skills</h2>
      <ul>
        {job.skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
      <h2>Perks</h2>
      <ul>
        {job.perks.map(perk => <li key={perk}>{perk}</li>)}
      </ul>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetail;
