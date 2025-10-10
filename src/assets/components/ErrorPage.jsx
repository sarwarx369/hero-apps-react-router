import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <img
        src="/public/error-404.png"
        alt=""
        className="w-[400px] h-auto mb-6"
      />

      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Oops, page not found!
      </h1>

      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>

      <NavLink to={"/"}>
        {" "}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition">
          Go Back!
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
