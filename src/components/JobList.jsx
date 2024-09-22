import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Shubham-bit-hash/Assets/main/job_postings.json')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <div className="job-list">
        {jobs.map(job => (
          <Link to={`/job/${job.jobId}`} key={job.jobId}>
            <div className="job-card">
              <h2>Title:{job.title}</h2>
              <p>Company:{job.company}</p>
              <p>Date:{job.date}</p>
              <p>Salary:{job.salary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobList;
