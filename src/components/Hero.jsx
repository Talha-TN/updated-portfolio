import React from "react";
import BioData from "./BioData";
import Picture from "./Picture";
import Linkedin from "./Linkedin";
import "../css/hero.css";
const Hero = () => {
  return (
    <main>
      <div className="about">
        <BioData />
        <Linkedin />
      </div>
      <Picture />
    </main>
  );
};
export default Hero;
