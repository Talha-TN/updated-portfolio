import React from "react";
import LogoPic from "../assets/logo.png";
const Logo = () => {
  return (
    <div className="logo-div">
      <img src={LogoPic} alt="logo" className="logo" />
      <h3 className="logo-text">TN portfolio</h3>
    </div>
  );
};

export default Logo;
