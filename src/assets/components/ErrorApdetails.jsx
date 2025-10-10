import React from "react";
import { NavLink } from "react-router";

const ErrorApdetails = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <img src="/App-Error.png" alt="" className="w-[400px] h-auto mb-6" />

      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        OPPS!! APP NOT FOUND
      </h1>

      <p className="text-gray-500 mb-6">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

      <NavLink to={"/apps"}>
        {" "}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition">
          Go Back!
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorApdetails;
