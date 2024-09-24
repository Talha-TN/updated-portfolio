import React from "react";
import Services from "../components/services/Services";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Work from "../components/worked/Work";
import Footer from "../components/footer/Footer";
const HomePage = () => {
  return(
    <>
    <Hero/>
    <About/>
    <Services/>
    <Projects/>
    <Work/>
    <Footer/>
    </>
  ) ;
};
export default HomePage;
