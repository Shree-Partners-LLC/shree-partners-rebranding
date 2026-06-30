import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/shree-logo.png";

function Navbar() {
  return (
    <header className="header">

      <div className="navbar">

        <Link to="/" className="logo">
          <img src={logo} alt="Shree Partners" />
        </Link>

        <nav className="nav-links">

          <Link to="/">Home</Link>

          <a href="#industries">Industries</a>

          <Link to="/about">About</Link>

          <Link to="/careers">Careers</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/contact" className="demo-btn">
            Request a demo
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;