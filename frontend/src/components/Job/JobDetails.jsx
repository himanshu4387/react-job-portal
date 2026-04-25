import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../main";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCity,
  FaArrowLeft,
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();
  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch(() => {
        navigateTo("/notfound");
      });
  }, []);

  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  const salary = job.fixedSalary
    ? `₹${Number(job.fixedSalary).toLocaleString()}`
    : job.salaryFrom && job.salaryTo
    ? `₹${Number(job.salaryFrom).toLocaleString()} – ₹${Number(job.salaryTo).toLocaleString()}`
    : "Not Disclosed";

  const postedDate = job.jobPostedOn
    ? new Date(job.jobPostedOn).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <section className="jobDetail page">
      <div className="container">
        <button className="back-btn" onClick={() => navigateTo("/job/getall")}>
          <FaArrowLeft /> Back to Jobs
        </button>
        <div className="job-detail-card">
          <div className="job-detail-header">
            <div>
              <span className="job-category-badge">{job.category}</span>
              <h2 className="job-detail-title">{job.title}</h2>
            </div>
            <div className="salary-badge">
              <FaMoneyBillWave />
              {salary}
            </div>
          </div>

          <div className="job-detail-meta">
            <span>
              <FaMapMarkerAlt /> {job.country}
            </span>
            <span>
              <FaCity /> {job.city}
            </span>
            <span>
              <FaBriefcase /> {job.location}
            </span>
            <span>
              <FaCalendarAlt /> {postedDate}
            </span>
          </div>

          <div className="job-detail-section">
            <h4>Job Description</h4>
            <p>{job.description}</p>
          </div>

          {user && user.role !== "Employer" && (
            <Link to={`/application/${job._id}`} className="apply-now-btn">
              Apply Now →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
