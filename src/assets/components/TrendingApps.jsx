import React from "react";

import Card8design from "./Card8design";
import { NavLink } from "react-router";

const TrendingApps = ({ apps8 }) => {
  return (
    <>
      <div className="bg-[#D9D9D9] p-6">
        <div className="">
          {" "}
          <h2 className="text-2xl md:text-3xl text-bold text-center">
            Trending Apps
          </h2>
          <p className="text-1xl text-sm text-center text-gray-500 my-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-4 gap-1 place-items-center ">
          {apps8.map((app) => (
            <Card8design app={app} key={app.id}></Card8design>
          ))}
        </div>
        <div className="flex justify-center m-2">
          {" "}
          <NavLink to={"/Apps"}>
            {" "}
            <button className="btn btn-primary">Show All</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TrendingApps;
