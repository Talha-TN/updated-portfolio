import React from "react";
import Services from "../components/services/Services";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
const HomePage = () => {
  return(
    <>
    <Hero/>
    <About/>
    <Services/>
    <Projects/>
    </>
  ) ;
};
export default HomePage;
