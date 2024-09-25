
import React from "react";
import { Link } from "react-scroll";
import resume from "../../assets/images/Talha Nawaz - resume.pdf"

const Header = () => {
  const linksStyles =
    "hover:text-blue-400 transition duration-300 text-[16px] px-2 cursor-pointer hover:underline hover:underline-offset-8";

  return (
    <header className="mt-4 bg-gray-800 text-white py-4 shadow-lg max-w-[1080px] mx-auto flex justify-between items-center px-4">
      <div>
        <h1 className="text-3xl text-blue-400 font-bold tracking-wider heading ">
          Talha Nawaz
        </h1>
      </div>

      <nav>
        <ul className="flex space-x-6 items-center paragraph">
          <li className={linksStyles}>
            <Link to="projects" smooth={true} duration={1200} spy={true} offset={-50} >
              projects
            </Link>
          </li>
          <li className={linksStyles}>
            <Link to="about" smooth={true} duration={900} spy={true} offset={-50} >
              About
            </Link>
          </li>
          <li className={linksStyles}>
            <Link to="services" smooth={true} duration={900} spy={true} offset={-50} >
              Services
            </Link>
          </li>
          <li className={linksStyles}>
            <Link to="footer" smooth={true} duration={1700}  offset={-50} >
              Contact us
            </Link>
          </li>
          <a href={resume} download="Talha-Nawaz-Resume.pdf" className="border border-blue-500 p-1 px-2 text-blue-400 hover:text-gray-400">
            Resume
           </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
