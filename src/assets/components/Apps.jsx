import React, { useEffect, useState } from "react";

import Card20Design from "./Card20Design";

const Apps = () => {
  const [apps20, setApps20] = useState([]);
  useEffect(() => {
    fetch("/appdata20.json")
      .then((res) => res.json())
      .then((data) => setApps20(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);
  return (
    <div className="bg-[#D9D9D9] p-6">
      <div className="">
        {" "}
        <h2 className="text-4xl text-bold text-center">Our All Applications</h2>
        <p className="text-1xl text-sm text-center text-gray-500 my-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center">
        {" "}
        <p>() Apps found</p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search Apps" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 ">
        {apps20.map((app) => (
          <Card20Design app={app} key={app.id}></Card20Design>
        ))}
      </div>
    </div>
  );
};

export default Apps;
