import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import logo from "../logo.png";
const Footer = () => {
  return (
    <div className="bg-[#001931] ">
      <footer className="footer sm:footer-horizontal  text-white p-10">
        <aside>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-10 h-10" />
            <span className="text-white text-bold text-3xl">HERO.IO</span>
          </div>
          <p>
            "Hero.IO is designed to streamline customer <br /> support by
            efficiently managing and tracking support tickets. <br />
            Our system ensures quick response times,
            <br />
            organized communication, and a seamless experience <br />
            for both customers and support teams."
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex items-center gap-2">
            <span className="bg-white w-7 h-6.5 text-black p-2 rounded-full">
              <FaTwitter />
            </span>
            Hero.IO
          </a>
          <a className="link link-hover flex items-center gap-2">
            <span className="bg-white w-7 h-6.5 text-black p-2 rounded-full">
              <FaLinkedin />
            </span>
            Hero.IO
          </a>
          <a className="link link-hover flex items-center gap-2">
            <span className="bg-white w-7 h-6  text-black p-2 rounded-full">
              <FaFacebook />
            </span>
            Hero.IO
          </a>
          <a className="link link-hover flex items-center gap-2">
            <span className="bg-white w-7 h-6.5 text-black p-2 rounded-full">
              <FaEnvelope />
            </span>
            support@cst.com
          </a>
        </nav>
      </footer>
      <hr />
      <p className="text-white text-center mt-2">
        © 2025 Hero.IO. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
