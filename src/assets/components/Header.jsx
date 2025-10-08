import React from "react";
import { NavLink } from "react-router";
import { Github } from "lucide-react";
import logo from "../logo.png";
const Header = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "m-4 font-bold text-red-500 border-b-2 border-red-500"
            : "m-4 font-bold text-gray-700"
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          isActive
            ? "m-4 font-bold text-red-500 border-b-2 border-red-500"
            : "m-4 font-bold text-gray-700"
        }
      >
        <li>Apps</li>
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) =>
          isActive
            ? "m-4 font-bold text-red-500 border-b-2 border-red-500"
            : "m-4 font-bold text-gray-700"
        }
      >
        <li>Installation</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start ml-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <img src={logo} alt="" className="w-10 h-10" />
          <span className="text-[#632EE3] text-bold">HERO.IO</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end mr-10">
        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <div className=" bg-white w-6 h-6 rounded-full inline-flex items-center justify-center">
            {" "}
            <Github className="text-[#632EE3] p-0.5"></Github>
          </div>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Header;
