import React from "react";

const Stats = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex flex-col justify-center">
      <div className="text-5xl flex justify-center text-extrabold">
        Trusted by Millions, Built for You
      </div>
      <div className="flex justify-around my-7">
        <div className="flex flex-col justify-center items-center gap-1 ">
          <p className="text-sm">Total Downloads</p>
          <h1 className="text-5xl text-extrabold ">29.6M</h1>
          <p className="text-sm">21% more than last month</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 ">
          <p className="text-sm">Total Reviews</p>
          <h1 className="text-5xl text-extrabold ">906K</h1>
          <p className="text-sm">21% more than last month</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 ">
          <p className="text-sm">Active Apps</p>
          <h1 className="text-5xl text-extrabold ">132+</h1>
          <p className="text-sm">21% more than last month</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
