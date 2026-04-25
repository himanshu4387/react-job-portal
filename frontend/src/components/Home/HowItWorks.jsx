import React from "react";
import { FaUserPlus, FaSearch, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      icon: <FaUserPlus />,
      title: "Create Account",
      description:
        "Sign up as a Job Seeker or Employer and set up your profile to get started with your job search or recruitment process.",
      btnLabel: "Get Started",
      action: () => navigate("/register"),
      colorClass: "step-purple",
    },
    {
      id: 2,
      icon: <FaSearch />,
      title: "Find a Job / Post a Job",
      description:
        "Browse hundreds of job listings that match your skills, or post a new job opening to attract the best candidates.",
      btnLabel: "Browse Jobs",
      action: () => navigate("/job/getall"),
      colorClass: "step-blue",
    },
    {
      id: 3,
      icon: <FaPaperPlane />,
      title: "Apply / Recruit Candidates",
      description:
        "Apply for jobs that excite you, or review applications and recruit the most suitable candidates for your organization.",
      btnLabel: "Apply Now",
      action: () => navigate("/job/getall"),
      colorClass: "step-teal",
    },
  ];

  return (
    <div className="howitworks">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Simple Process</span>
          <h3>How Career Connect Works</h3>
          <p className="section-subtitle">
            Three easy steps to kickstart your career or find the perfect hire.
          </p>
        </div>
        <div className="banner">
          {steps.map((step) => (
            <div className={`card ${step.colorClass}`} key={step.id}>
              <div className="step-number">{step.id < 10 ? `0${step.id}` : step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <p className="step-title">{step.title}</p>
              <p className="step-desc">{step.description}</p>
              <button className="step-btn" onClick={step.action}>
                {step.btnLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
