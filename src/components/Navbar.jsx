import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">

        <a href="#top" className="logo">
          <span className="logo-mark"></span>
          Shree Partners
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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
            <a className="btn btn-solid" href="#contact">
              Book a Discovery Call
            </a>
          </li>

        </ul>

      </div>
    </header>
  );
}

export default Navbar;