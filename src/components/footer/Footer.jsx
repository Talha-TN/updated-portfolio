import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const spanColor ="text-2xl text-gray-400 hover:text-blue-400 cursor-pointer"
  return (
    <div className="text-white max-w-[500px] m-auto mt-20">
      <div className="">
        <h1 className="text-center text-blue-400 font-semibold text-2xl">
          Get in Touch
        </h1>
        <p className="text-[14px] text-gray-400 mt-3">
          "Please feel free to reach out to me through the accounts I've listed
          in my portfolio, or you can also send me an email at the address
          provided. I'm excited to connect and collaborate on some amazing
          projects together!"
        </p>
      </div>
      <div className="flex justify-center items-center gap-3 mt-4 pb-10 ">
        <span className={spanColor}>
          <a href="https://www.linkedin.com/in/talha-nawaz-5421931a4/" target="_blank"><FaLinkedin /></a>
        </span>
        <span className={spanColor}>
          <a href="mailto:nawazt964@gmail.com" target="_blank"><IoMail /></a>
        </span>
        <span className={spanColor}>
          <a href="https://github.com/Talha-TN" target="_blank"><FaGithub /></a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
