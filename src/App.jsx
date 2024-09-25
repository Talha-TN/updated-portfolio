import "./App.css";
import Header from "./components/header/Header";
import Hero from "../src/components/hero/Hero.jsx";
import About from "../src/components/about/About.jsx";
import Services from "../src/components/services/Services";
import Projects from "../src/components/projects/Projects.jsx";
import Work from "../src/components/worked/Work.jsx";
import Footer from "../src/components/footer/Footer.jsx";


function App() {
  return (
    <>
   
      <Header />
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Work/>
      <Footer/>
      
     
    </>
  );
}
export default App;
