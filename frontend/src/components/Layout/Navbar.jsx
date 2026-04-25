import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  const navigateTo = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        { withCredentials: true }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Logged out.");
    } finally {
      setUser({});
      setIsAuthorized(false);
      navigateTo("/login");
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
          <img src="/careerconnect-white.png" alt="logo" />
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link
              to={"/"}
              onClick={() => setShow(false)}
              className={isActive("/") ? "nav-active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/job/getall"}
              onClick={() => setShow(false)}
              className={isActive("/job/getall") ? "nav-active" : ""}
            >
              All Jobs
            </Link>
          </li>
          <li>
            <Link
              to={"/applications/me"}
              onClick={() => setShow(false)}
              className={isActive("/applications/me") ? "nav-active" : ""}
            >
              {user && user.role === "Employer"
                ? "Applicants"
                : "My Applications"}
            </Link>
          </li>
          {user && user.role === "Employer" ? (
            <>
              <li>
                <Link
                  to={"/job/post"}
                  onClick={() => setShow(false)}
                  className={isActive("/job/post") ? "nav-active" : ""}
                >
                  Post Job
                </Link>
              </li>
              <li>
                <Link
                  to={"/job/me"}
                  onClick={() => setShow(false)}
                  className={isActive("/job/me") ? "nav-active" : ""}
                >
                  My Jobs
                </Link>
              </li>
            </>
          ) : null}
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
        <div className="hamburger" onClick={() => setShow(!show)}>
          {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
