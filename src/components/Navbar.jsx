import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <Link className="logo" to="/">
          <span className="logo-mark"></span>
          Shree Partners
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "CLOSE" : "MENU"}
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li className="services-menu">
            <span>Services ▾</span>

            <div className="mega-menu">
              <div className="menu-column">
                <Link
                  to="/application-services"
                  className="menu-heading orange-heading"
                >
                  <h3>Application Services and Automation</h3>
                </Link>

                <Link to="/test-automation">Test Automation</Link>
                <Link to="/full-stack-development">Full Stack Development</Link>
                <Link to="/mobility">Mobility</Link>
                <Link to="/digital-marketing-collaboration">
                  Digital Marketing and Collaboration
                </Link>
                <Link to="/intranet-solutions">Intranet Solutions</Link>
                <Link to="/product-engineering">Product Engineering</Link>
              </div>

              <div className="menu-column">
                <Link to="/ai-ml" className="menu-heading orange-heading">
                  <h3>Digital, AI and Machine Learning</h3>
                </Link>

                <Link to="/domain-specific-nlp">
                  Domain-specific NLP Engines
                </Link>
                <Link to="/intelligent-rpa">Intelligent RPA</Link>
                <Link to="/machine-learning-deep-learning">
                  Development, Machine Learning and Deep Learning
                </Link>
                <Link to="/real-time-ai-cloud-ivr">
                  Real-time AI on Cloud – IVR
                </Link>
                <Link to="/digital-ai-consulting">
                  Digital and AI Consulting
                </Link>
                <Link to="/iot-solutions">
                  Internet of Things (IoT) Solutions
                </Link>
              </div>

              <div className="menu-column">
                <Link
                  to="/data-management"
                  className="menu-heading orange-heading"
                >
                  <h3>Data Management and Analytics</h3>
                </Link>
                <Link to="/big-data-solutions">Big Data Solutions</Link>

                <Link to="/data-lakes">
                  Data Lakes Design, Strategy and Implementation
                </Link>

                <Link to="/data-science">
                  Data Science, Predictive and Prescriptive Analytics
                </Link>

                <Link to="/business-intelligence">
                  Business Intelligence and Analytics
                </Link>
              </div>

              <div className="menu-column">
                <Link to="/enterprise" className="menu-heading orange-heading">
                  <h3>Enterprise Operations Transformation</h3>
                </Link>

                <Link to="/network-operations">Network Operations Center</Link>

                <Link to="/data-center-operations">Data Center Operations</Link>

                <Link to="/cybersecurity">
                  Cybersecurity and Threat Management
                </Link>

                <Link to="/cloud-management">Cloud Management</Link>

                <Link to="/devops">DevOps Consulting and Implementation</Link>
              </div>
            </div>
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
