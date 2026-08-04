import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/shree-logo-white.png";
const company = [
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];
const services = [
  { name: "AI & ML", path: "/ai-ml" },
  { name: "Generative AI", path: "/generative-ai" },
  { name: "Cloud", path: "/cloud" },
];
const industries = [
  { name: "Travel", path: "/travel" },
  { name: "Healthcare", path: "/healthcare" },
  { name: "Financial Services", path: "/financial-services" },
];
const Footer = () => {
  const sectionRef = useRef(null);
useEffect(() => {
  const element = sectionRef.current;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) element.classList.add("show");
      else element.classList.remove("show");
    },
    {threshold: 0.15,}
  );
  if (element) observer.observe(element);
  return () => observer.disconnect();
}, []);
  return (
    <footer ref={sectionRef} className="footer scroll-animation">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo"><img src={logo} alt="Shree Partners" /></Link>
            <p> AI-first digital transformation for the enterprise. Delivering from the US & India since 2005.</p>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            {services.map(({name,path}) => (
              <a key={name} href={path}>{name}</a>
            ))}
          </div>
          <div className="footer-links">
            <h4>Industries</h4>
            {industries.map(({name,path}) => (
              <a key={name} href={path}>{name}</a>
            ))}
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            {company.map(({ name, path }) => (
              <a key={name} href={path}>{name}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Shree Partners. All rights reserved.</p>
          <div className="footer-policy">
            <a href="/privacy">Privacy</a>
            <span> · </span>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;