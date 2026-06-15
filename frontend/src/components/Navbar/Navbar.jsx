import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (menu) => {setActiveDropdown(activeDropdown === menu ? null : menu);};
  return (
    <header>
      <div className="wrap nav">
        <Link className="logo" to="/"><img src={logo} alt="Shree Partners Logo" /></Link>
        <button className="menu-btn" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "CLOSE" : "MENU"}
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
            <li className="dropdown">
                <button className="dropdown-btn" onClick={() => toggleDropdown("services")}>Services</button>
                {activeDropdown === "services" && (
                    <ul className="dropdown-menu">
                        <li><Link to="/services/application-services"><b>Application Services and Automation</b></Link>
                        <ul className="mini-dropdown-menu">
                            <li><Link to="/services/test-automation">Test Automation </Link></li>
                            <li><Link to="/services/full-stack-development">Full Stack Development</Link></li>
                            <li><Link to="/services/mobility">Mobility</Link></li>
                            <li><Link to="/services/digital-marketing">Digital Marketing and Collaboration</Link></li>
                            <li><Link to="/services/intranet">Intranet Solutions</Link></li>
                            <li><Link to="/services/product-engineering">Product Engineering</Link></li>
                        </ul>
                        </li>
                        <li><Link to="/services/ai-ml"><b>Digital, AI and Machine Learning</b></Link>
                        <ul className="mini-dropdown-menu">
                            <li><Link to="/services/nlp">Domain-specific NLP Engines</Link></li>
                            <li><Link to="/services/rpa">Intelligent RPA</Link></li>
                            <li><Link to="/services/deep-learning">Development, Machine Learning and Deep Learning</Link></li>
                            <li><Link to="/services/ivr-ai">Real-time AI on Cloud – IVR</Link></li>
                            <li><Link to="/services/ai-consulting">Digital and AI Consulting</Link></li>
                            <li><Link to="/services/iot">Internet of Things (IoT) Solutions</Link></li>
                        </ul>
                        </li>
                        <li><Link to="/services/data-management"><b>Data Management and Analytics</b></Link>
                        <ul className="mini-dropdown-menu">
                            <li><Link to="/services/big-data">Big Data Solutions</Link></li>
                            <li><Link to="/services/data-lakes">Data Lakes Design, Strategy and Implementation</Link></li>
                            <li><Link to="/services/data-science">Data Science, Predictive and Prescriptive Analytics</Link></li>
                            <li><Link to="/services/business-intelligence">Business Intelligence and Analytics</Link></li>
                        </ul>
                        </li>
                        <li><Link to="/services/enterprise-operations"><b>Enterprise Operations Transformation</b></Link>
                        <ul className="mini-dropdown-menu">
                            <li><Link to="/services/network-operations">Network Operations Center</Link></li>
                            <li><Link to="/services/data-center">Data Center Operations</Link></li>
                            <li><Link to="/services/cybersecurity">Cybersecurity and Threat Management</Link></li>
                            <li><Link to="/services/cloud">Cloud Management</Link></li>
                            <li><Link to="/services/devops">DevOps Consulting and Implementation</Link></li>
                        </ul>
                        </li>
                    </ul>
                )}
            </li>
            <li className="dropdown">
                <button className="dropdown-btn"onClick={() => toggleDropdown("industries")}>Industries</button>
                {activeDropdown === "industries" && (
                    <ul className="dropdown-menu">
                        <li><Link to="/industries/travel-hospitality"><b>Travel & Hospitality</b></Link>
                        <ul className="mini-dropdown-menu">
                            <li><Link to="/industries/airline">Airline</Link></li>
                            <li><Link to="/industries/travel-management">Travel Management Companies</Link></li>
                            <li><Link to="/industries/hospitality">Hospitality</Link></li>
                        </ul>
                        </li>
                        <li><Link to="/industries/healthcare"><b>Healthcare</b></Link>
                        <ul className="mini-dropdown-menu">
                            <li><Link to="/industries/payer">Payer</Link></li>
                            <li><Link to="/industries/provider">Provider</Link></li>
                            <li><Link to="/industries/pharma">Pharma & Life Sciences</Link></li>
                        </ul>
                        </li>
                        <li className="mini-dropdown-menu"><Link to="/industries/banking-finance"><b>Banking & Finance</b></Link></li>
                        <li className="mini-dropdown-menu"><Link to="/industries/insurance"><b>Insurance</b></Link></li>
                        <li className="mini-dropdown-menu"><Link to="/industries/professional-services"><b>Professional Services</b></Link></li>
                    </ul>
                )}
            </li>
            <li className="dropdown">
                <button className="dropdown-btn"onClick={() => toggleDropdown("about")}>About Us</button>
                {activeDropdown === "about" && (
                    <ul className="dropdown-menu">
                        <li className="mini-dropdown-menu"><Link to="/about/mission-vision"><b>Mission and Vision</b></Link></li>
                        <li className="mini-dropdown-menu"><Link to="/about/alliances"><b>Alliances</b></Link></li>
                        <li className="mini-dropdown-menu"><Link to="/about/leadership"><b>Leadership</b></Link></li>
                    </ul>
                )}
            </li>
            <li className="dropdown">
                <button className="dropdown-btn"onClick={() => toggleDropdown("insights")}>Insights</button>
                {activeDropdown === "insights" && (
                    <ul className="dropdown-menu">
                        <li className="mini-dropdown-menu"><Link to="/insights/ ochures"><b>Brochures</b></Link></li>
                        <li className="mini-dropdown-menu"><Link to="/insights/blogs"><b>Blogs</b></Link></li>
                    </ul>
                )}
            </li>
            <li className="dropdown">
                <button className="dropdown-btn" onClick={() => toggleDropdown("careers")}>Careers</button>
                {activeDropdown === "careers" && (
                    <ul className="dropdown-menu">
                        <li className="mini-dropdown-menu"><Link to="/careers/life-at-shree"><b>Life at Shree Partners</b></Link></li>
                    </ul>
                )}
            </li>
            <li><Link className="btn btn-solid" to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;