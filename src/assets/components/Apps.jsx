import React, { useEffect, useState } from "react";
import Card20Design from "./Card20Design";

const Apps = () => {
  const [apps20, setApps20] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    fetch("/appdata20.json")
      .then((res) => res.json())
      .then((data) => {
        setApps20(data);
        setFilteredApps(data);
      })
      .catch((error) => console.error("Error to load data:", error));
  }, []);

  useEffect(() => {
    const filtered = apps20.filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [search, apps20]);

  return (
    <div className="bg-[#D9D9D9] p-6">
      <div>
        <h2 className="text-4xl font-bold text-center">Our All Applications</h2>
        <p className="text-sm text-center text-gray-500 my-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p>({filteredApps.length}) Apps found</p>
        <label className="input relative">
          <svg
            className="h-[1em] absolute left-2 top-1/2 transform -translate-y-1/2 opacity-50"
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
          <input
            type="search"
            required
            placeholder="Search Apps"
            className="pl-6 pr-2 py-1  rounded focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          {filteredApps.map((app) => (
            <Card20Design app={app} key={app.id}></Card20Design>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 font-semibold mt-10">
          No App Found
        </p>
      )}
    </div>
  );
};

export default Apps;
