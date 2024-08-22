import React from "react";
import "../css/footer.css";
import FooterContent from "./FooterContent";
import FooterText from "./FooterText";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterContent />
        <FooterText />
      </div>
    </footer>
  );
};

export default Footer;
