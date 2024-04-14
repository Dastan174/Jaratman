import React from "react";
import PaymentCards from "../image/pay_by_cards.webp";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";

const Footer = () => {
  const navigate = useNavigate();
  function aboutUs() {
    navigate("/about-us");
    window.scrollTo({
      top: 0,
    });
  }
  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }} id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer-bar">
            <h4 style={{ marginBottom: "10px", fontSize: "20px" }}>Links</h4>
            <p onClick={aboutUs}>About us</p>
            <p onClick={() => navigate("/contact-page")}>Contact</p>
            <p onClick={() => navigate("/terms")}>Terms of Service</p>
            <p onClick={() => navigate("/shipping")}>Shipping Policy</p>
          </div>
          <div className="footer-cards">
            <img src={PaymentCards} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
