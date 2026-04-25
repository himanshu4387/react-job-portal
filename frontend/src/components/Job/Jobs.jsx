import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../../main";
import { FaMapMarkerAlt, FaBriefcase, FaSearch } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const { isAuthorized } = useContext(Context);

  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_API_URL}/job/getall`, {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  const filteredJobs =
    jobs.jobs &&
    jobs.jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.category.toLowerCase().includes(search.toLowerCase()) ||
        job.country.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <section className="jobs page">
      <div className="container">
        <div className="jobs-header">
          <h1>All Available Jobs</h1>
          <p className="jobs-subtitle">
            Discover your next opportunity from our curated listings.
          </p>
          <div className="jobs-search-bar">
            <FaSearch className="jobs-search-icon" />
            <input
              type="text"
              placeholder="Search by title, category or country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="banner">
          {filteredJobs && filteredJobs.length > 0 ? (
            filteredJobs.map((element) => (
              <div className="card" key={element._id}>
                <div className="card-top">
                  <span className="job-category-badge">{element.category}</span>
                </div>
                <p className="job-title">{element.title}</p>
                <div className="job-meta">
                  <span>
                    <FaMapMarkerAlt /> {element.country}
                  </span>
                  <span>
                    <FaBriefcase /> {element.jobType || "Full Time"}
                  </span>
                </div>
                <Link to={`/job/${element._id}`} className="job-details-btn">
                  View Details →
                </Link>
              </div>
            ))
          ) : (
            <p className="no-jobs-msg">
              {jobs.jobs ? "No jobs match your search." : "Loading jobs..."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
