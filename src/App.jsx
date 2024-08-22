
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesCard from "./components/ServicesCard";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
// import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";
// import AddressPage from "./components/AddressPage";
// import ServicesPage from "./components/ServicesPage";
// import ContactPage from "./components/ContactPage";
// import { Routes, Route } from "react-router-dom";
import MyProjects from "./components/MyProjects";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes> */}
      <Header />
      <Hero />
      <ServicesCard />
      <MyProjects/>
      <ContactMe />
    
      <Footer />
    </>
  );
}

export default App;
