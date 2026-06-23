import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top">
          <span className="logo-mark"></span>
          Shree Partners
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          MENU
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#services">Services</a></li>
          <li><a href="#approach">How we work</a></li>
          <li><a href="#about">About</a></li>
          <li>
            <a className="btn btn-solid" href="#contact">
              Book a discovery call
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}