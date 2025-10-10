import React from "react";

import play from "../play.png";
import appstore from "../app-store.png";
import pic from "../hero.png";

const Banner = () => {
  return (
    <div className="bg-[#D9D9D9]">
      {" "}
      <div className="hero  ">
        <div className="hero-content text-center">
          <div className="max-w-200">
            <h1 className="text-2xl md:text-4xl font-bold">
              We Build <br />
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="py-4 my-3 text-gray-500 text-sm md:text-md">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex gap-5 justify-center my-5">
              <a href="https://play.google.com/store/apps?hl=en" target="blank">
                {" "}
                <button className="btn btn-active">
                  {" "}
                  <img
                    src={play}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />{" "}
                  Goole Play
                </button>
              </a>
              <a href="https://www.apple.com/app-store/" target="blank">
                {" "}
                <button className="btn btn-active">
                  {" "}
                  <img src={appstore} alt="" className="w-8 h-8 rounded-full" />
                  App Store
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <img src={pic} alt="" className="w-50 h-50 md:w-150 md:h-120" />
      </div>
    </div>
  );
};

export default Banner;
