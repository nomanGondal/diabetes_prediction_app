import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <span className="logo-icon">🩺</span>
        <h1>Diabetes Prediction System</h1>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#predict">Predict</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
