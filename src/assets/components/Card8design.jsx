import React from "react";

import { MdDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

const Card8design = ({ app }) => {
  return (
    <NavLink to={`/appdetails/${app.id}`}>
      <div className="rounded h-51 w-48 my-2 bg-white flex flex-col justify-center items-center p-4">
        <div>
          <img
            src={app.image}
            alt=""
            className="w-35 h-29 bg-[#D9D9D9] rounded"
          />
        </div>
        <div>
          {" "}
          <h2>{app.title}</h2>
          <div className="flex justify-between gap-4 ">
            <p className="flex gap-1 items-center justify-center bg-[#F1F5E8] w-13 h-7 rounded text-green-500">
              <MdDownload /> {app.downloads}
            </p>
            <p className="flex gap-1 items-center justify-center bg-[#F1F5E8] w-13 h-7 rounded text-green-500">
              <FaStar /> {app.ratingAvg}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card8design;
