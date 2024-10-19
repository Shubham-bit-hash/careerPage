import React, { useEffect, useState } from "react";
// import LaptopImg from "../../assets/laptop-computer-icon.png";
import Cards from "./Cards";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Post({ searchInput, selectedContract, showRemoteJobs }) {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const jobsPerPage = 5;

  // Fetch jobs data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Bitpayme-technology-sol/jobs/refs/heads/main/jobs.json"
    )
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  // Filter vacancies based on search input, selected contract, and remote jobs
  const filteredVacancies = jobs
    .filter((item) =>
      searchInput
        ? item.title?.toLowerCase().includes(searchInput.toLowerCase())
        : true
    )
    .filter((item) =>
      selectedContract
        ? item.type.toLowerCase() === selectedContract.toLowerCase()
        : true
    )
    .filter((item) =>
      showRemoteJobs ? item.location.toLowerCase().includes("remote") : true
    );

  // Reset the pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchInput, selectedContract, showRemoteJobs]);

  // Pagination logic
  const totalPages = Math.ceil(filteredVacancies.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredVacancies.slice(indexOfFirstJob, indexOfLastJob);

  // Handle pagination buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Date formatting function
  function getTimeDifference(postDateString) {
    const [day, month, year] = postDateString.split("-").map(Number);

    const postDate = new Date(year, month - 1, day);
    const today = new Date(); // Current date

    const timeDiff = today - postDate; // Difference in milliseconds
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    if (daysDiff === 0) return "Today";
    if (daysDiff === 1) return "1 day ago";
    if (daysDiff < 7) return `${daysDiff} days ago`;
    if (daysDiff < 30) {
      const weeksDiff = Math.floor(daysDiff / 7);
      return `${weeksDiff} week${weeksDiff > 1 ? "s" : ""} ago`;
    }
    const monthsDiff = Math.floor(daysDiff / 30);
    return `${monthsDiff} month${monthsDiff > 1 ? "s" : ""} ago`;
  }

  return (
    <section className="w-[75%] xs:w-full xs:mt-5 md:mt-0 md:w-[65%] lg:w-[75%]">
      <div className="cards flex flex-col gap-3 h-[1000px] xs:h-[unset] lg:h-full">
        {currentJobs.length > 0 ? (
          currentJobs.map((item) => {
            const { jobId, title, Experience, location, salary, date, type } =
              item;
            const displayTime = getTimeDifference(date);
            return (
              <Cards
                key={jobId}
                postName={title}
                typesLocation={Experience}
                workLocation={location}
                salary={salary}
                jobPostTime={displayTime}
                Contract={type}
                id={jobId}
                link={`/job/${jobId}`}
              />
            );
          })
        ) : (
          <p>No jobs found</p>
        )}

        {/* Pagination Controls */}
        {filteredVacancies.length > jobsPerPage && (
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
            >
              <FaChevronLeft />
            </button>
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Post;
