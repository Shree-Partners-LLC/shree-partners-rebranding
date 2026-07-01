import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/shree-logo-white.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <Link to="/" className="logo">
          <img src={logo} alt="Shree Partners" />
        </Link>
          <div className="footer-about">
            <p> AI-first digital transformation for the enterprise. Delivering from the US & India since 2005. </p>
          </div>
          <div>
            <h4>Services</h4>
            <a href="/#capabilities">AI & ML</a>
            <a href="/#capabilities">Generative AI</a>
            <a href="/#capabilities">Cloud</a>
          </div>
          <div>
            <h4>Industries</h4>
            <a href="/#industries">Travel</a>
            <a href="/#industries">Healthcare</a>
            <a href="/#industries">Financial Services</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span> © 2026 Shree Partners. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;