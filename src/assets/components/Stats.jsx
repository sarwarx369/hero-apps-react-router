import React from "react";

const Stats = () => {
  return (
    <div className="p-4 sm:p-6 md:p-9 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex flex-col justify-center text-center">
      <div className="text-2xl  md:text-4xl font-extrabold flex justify-center mb-6">
        Trusted by Millions, Built for You
      </div>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-6 sm:gap-4 md:gap-8">
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xs sm:text-sm opacity-90">Total Downloads</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            29.6M
          </h1>
          <p className="text-xs sm:text-sm opacity-80">
            21% more than last month
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xs sm:text-sm opacity-90">Total Reviews</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            906K
          </h1>
          <p className="text-xs sm:text-sm opacity-80">
            21% more than last month
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xs sm:text-sm opacity-90">Active Apps</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            132+
          </h1>
          <p className="text-xs sm:text-sm opacity-80">
            21% more than last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
