
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linksStyles =
    "hover:text-blue-400 transition duration-300 text-[16px] px-4";
    
  return (
    <header className="mt-4 bg-gray-800 text-white py-4 shadow-lg max-w-[1080px] mx-auto flex justify-between items-center px-4">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold font-serif tracking-wider">
          Talha Nawaz
        </h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <NavLink
            to="/"
            className={linksStyles}
            activeClassName="text-yellow-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={linksStyles}
            activeClassName="text-yellow-400"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={linksStyles}
            activeClassName="text-yellow-400"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={linksStyles}
            activeClassName="text-yellow-400"
          >
            Contact us
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
