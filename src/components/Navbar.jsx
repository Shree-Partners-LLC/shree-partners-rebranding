import { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="logo">
          <span className="logo-mark"></span>
          Shree Partners
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          MENU
        </button>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#approach">How we work</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <Link to="/discovery-call" className="btn btn-solid">
              Book a Discovery Call
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Navbar;
