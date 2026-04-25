import React from "react";
import { FaMicrosoft, FaApple, FaAmazon, FaGoogle } from "react-icons/fa";
import { SiTesla, SiInfosys, SiTata } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const PopularCompanies = () => {
  const navigate = useNavigate();

  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Hyderabad, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
      colorClass: "company-blue",
    },
    {
      id: 2,
      title: "Google",
      location: "Bangalore, India",
      openPositions: 14,
      icon: <FaGoogle />,
      colorClass: "company-green",
    },
    {
      id: 3,
      title: "Amazon",
      location: "Hyderabad, India",
      openPositions: 22,
      icon: <FaAmazon />,
      colorClass: "company-orange",
    },
    {
      id: 4,
      title: "Apple",
      location: "Pune, India",
      openPositions: 8,
      icon: <FaApple />,
      colorClass: "company-grey",
    },
    {
      id: 5,
      title: "Tesla",
      location: "Gurugram, India",
      openPositions: 5,
      icon: <SiTesla />,
      colorClass: "company-red",
    },
    {
      id: 6,
      title: "Infosys",
      location: "Bangalore, India",
      openPositions: 35,
      icon: <SiInfosys />,
      colorClass: "company-purple",
    },
  ];

  return (
    <div className="companies">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Top Employers</span>
          <h3>Top Companies Hiring</h3>
          <p className="section-subtitle">
            Join industry leaders — explore open positions at the world's best companies.
          </p>
        </div>
        <div className="banner">
          {companies.map((element) => (
            <div className={`card ${element.colorClass}`} key={element.id}>
              <div className="content">
                <div className="icon">{element.icon}</div>
                <div className="text">
                  <p>{element.title}</p>
                  <p>{element.location}</p>
                </div>
              </div>
              <button onClick={() => navigate("/job/getall")}>
                {element.openPositions} Open Positions
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
