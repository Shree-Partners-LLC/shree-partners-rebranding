import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/shree-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <a href={import.meta.env.BASE_URL + ""} className="logo">
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
          <a href={import.meta.env.BASE_URL + ""}>Home</a>
          <a href={import.meta.env.BASE_URL + "#industries"}>Industries</a>
          <a href={import.meta.env.BASE_URL + "about"}>About</a>
          <a href={import.meta.env.BASE_URL + "careers"}>Careers</a>
          <a href={import.meta.env.BASE_URL + "contact"}>Contact</a>
          <a href={import.meta.env.BASE_URL + "contact"} className="demo-btn">
            Request a Demo
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;