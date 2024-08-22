import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="links">
      <ul className="ul">
        <li className="link ">
          <NavLink exact activeClassName="active-class" to="/">Home</NavLink>
        </li>
        <li className="link">
          <NavLink exact activeClassName="active-class" to="/about">About</NavLink>
        </li>
        <li className="link">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="link">
          <NavLink to="/address">Address</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
