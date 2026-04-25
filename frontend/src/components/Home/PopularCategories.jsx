import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PopularCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
      colorClass: "cat-pink",
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
      colorClass: "cat-purple",
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
      colorClass: "cat-blue",
    },
    {
      id: 4,
      title: "MERN Stack Development",
      subTitle: "1000+ Open Positions",
      icon: <FaReact />,
      colorClass: "cat-cyan",
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
      colorClass: "cat-green",
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
      colorClass: "cat-orange",
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
      colorClass: "cat-red",
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
      colorClass: "cat-indigo",
    },
  ];

  return (
    <div className="categories">
      <div className="section-header">
        <span className="section-tag">Explore Fields</span>
        <h3>Popular Categories</h3>
        <p className="section-subtitle">
          Find opportunities across the most in-demand industries and roles.
        </p>
      </div>
      <div className="banner">
        {categories.map((element) => (
          <div
            className={`card ${element.colorClass}`}
            key={element.id}
            onClick={() => navigate("/job/getall")}
            style={{ cursor: "pointer" }}
          >
            <div className="icon">{element.icon}</div>
            <div className="text">
              <p>{element.title}</p>
              <p>{element.subTitle}</p>
            </div>
            <span className="cat-arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
