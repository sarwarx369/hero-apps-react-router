import React from "react";

import play from "../play.png";
import appstore from "../app-store.png";
import pic from "../hero.png";

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200  border-2 border-red-500">
        <div className="hero-content text-center">
          <div className="max-w-200">
            <h1 className="text-5xl font-bold">
              We Build <br />
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="py-4 border-2 border-red-500 text-gray-400">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex gap-5 justify-center my-5">
              <button className="btn btn-active">
                {" "}
                <img src={play} alt="" className="w-8 h-8 rounded-full" /> Goole
                Play
              </button>
              <button className="btn btn-active">
                {" "}
                <img src={appstore} alt="" className="w-8 h-8 rounded-full" />
                App Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <img src={pic} alt="" />
      </div>
    </>
  );
};

export default Banner;
