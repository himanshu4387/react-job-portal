import React, { useState } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/job/getall");
  };

  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
      colorClass: "stat-purple",
    },
    {
      id: 2,
      title: "91,220",
      subTitle: "Companies",
      icon: <FaBuilding />,
      colorClass: "stat-blue",
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
      colorClass: "stat-teal",
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
      colorClass: "stat-orange",
    },
  ];

  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <span className="hero-badge">🚀 #1 Job Portal in India</span>
            <h1>
              Find a Job That Suits{" "}
              <span className="hero-highlight">Your Interests & Skills</span>
            </h1>
            <p>
              Discover thousands of job opportunities that match your skills and
              passions. Connect with top employers seeking talent like yours.
            </p>
            <form className="hero-search" onSubmit={handleSearch}>
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit">Search Jobs</button>
              </div>
            </form>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => (
            <div className={`card ${element.colorClass}`} key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
