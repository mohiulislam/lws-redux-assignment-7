import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { filter } from "../features/filterJobs/filterJobsSlice";
function MainLayout({ children }) {
  const dispatch = useDispatch();
  function handleFilter(filterBy) {
    dispatch(filter(filterBy));
  }

  return (
    <Fragment>
      <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      </nav>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <div className="sidebar">
          <nav>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleFilter("allJobs")}
                  className="main-menu menu-active"
                  id="lws-alljobs-menu"
                >
                  <BsFillBriefcaseFill className="inline" />
                  <span> All Available Jobs</span>
                </button>
                <ul className="space-y-6 lg:space-y-2">
                  <li>
                    <button
                      onClick={() => handleFilter("internship")}
                      className="sub-menu"
                      id="lws-internship-menu"
                    >
                      <BsFillBriefcaseFill className="mr-1 inline !text-[#FF5757]" />
                      Internship
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleFilter("fulltime")}
                      className="sub-menu"
                      id="lws-fulltime-menu"
                    >
                      <BsFillBriefcaseFill className="mr-1 inline !text-[#FF8A00]" />
                      Full Time
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleFilter("remote")}
                      className="sub-menu"
                      id="lws-remote-menu"
                    >
                      <BsFillBriefcaseFill className="mr-1 inline !text-[#56E5C4]" />
                      Remote
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Create" className="main-menu" id="lws-addJob-menu">
                  <i className="fa-solid fa-file-circle-plus"></i>
                  <span>Add NewJob</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:pl-[14rem] mt-[5.8125rem]">{children}</div>
      </div>
    </Fragment>
  );
}

export default MainLayout;
