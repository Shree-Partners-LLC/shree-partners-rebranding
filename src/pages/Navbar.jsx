import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/shree-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <a href="/" className="logo">
          <img src={logo} alt="Shree Partners" />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/#industries">Industries</a>
          <a href="/about">About</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
          <a href="/contact" className="demo-btn">
            Request a Demo
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;