import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Diabetes Prediction System</h3>
          <p>
            An AI-powered application designed to assist in early diabetes
            risk assessment using machine learning models.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#predict">Prediction</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Disclaimer</h4>
          <p>
            This application is for educational purposes only and does not
            replace professional medical advice.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Diabetes Prediction System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
