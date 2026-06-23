import "./Navbar.css";
import { useState } from "react";
import logo from "../../assets/logo.png";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (menu) => {setActiveDropdown(activeDropdown === menu ? null : menu);};
  return (
    <header>
        <div className="wrap nav">
            <img src={logo} alt="Shree Partners Logo" className="logo"/>
            <button className="menu-btn" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "CLOSE" : "MENU"}</button>
            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li className="dropdown">
                    <button className="dropdown-btn" onClick={() => toggleDropdown("services")}>Services</button>
                    {activeDropdown === "services" && (
                        <ul className="dropdown-menu">
                            <li><a href="/application-services"><b>Application Services and Automation</b></a>
                            <ul className="mini-dropdown-menu">
                                <li><a href="/test-automation">Test Automation </a></li>
                                <li><a href="/full-stack-development">Full Stack Development</a></li>
                                <li><a href="/mobility">Mobility</a></li>
                                <li><a href="/digital-marketing-collaboration">Digital Marketing and Collaboration</a></li>
                                <li><a href="/intranet-solutions">Intranet Solutions</a></li>
                                <li><a href="/product-engineering">Product Engineering</a></li>
                            </ul>
                            </li>
                            <li><a href="ai-ml"><b>Digital, AI and Machine Learning</b></a>
                            <ul className="mini-dropdown-menu">
                                <li><a href="/domain-specific-nlp">Domain-specific NLP Engines</a></li>
                                <li><a href="/intelligent-rpa">Intelligent RPA</a></li>
                                <li><a href="/machine-learning-deep-learning">Development, Machine Learning and Deep Learning</a></li>
                                <li><a href="/real-time-ai-cloud-ivr">Real-time AI on Cloud – IVR</a></li>
                                <li><a href="/digital-ai-consulting">Digital and AI Consulting</a></li>
                                <li><a href="/iot-solutions">Internet of Things (IoT) Solutions</a></li>
                            </ul>
                            </li>
                            <li><a href="/data-management"><b>Data Management and Analytics</b></a>
                            <ul className="mini-dropdown-menu">
                                <li><a href="/big-data-solutions">Big Data Solutions</a></li>
                                <li><a href="/data-lakes">Data Lakes Design, Strategy and Implementation</a></li>
                                <li><a href="/data-science">Data Science, Predictive and Prescriptive Analytics</a></li>
                                <li><a href="/business-intelligence">Business Intelligence and Analytics</a></li>
                            </ul>
                            </li>
                            <li><a href="/enterprise"><b>Enterprise Operations Transformation</b></a>
                            <ul className="mini-dropdown-menu">
                                <li><a href="/network-operations">Network Operations Center</a></li>
                                <li><a href="/data-center-operations">Data Center Operations</a></li>
                                <li><a href="/cybersecurity">Cybersecurity and Threat Management</a></li>
                                <li><a href="/cloud-management">Cloud Management</a></li>
                                <li><a href="/devops">DevOps Consulting and Implementation</a></li>
                            </ul>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="dropdown">
                    <button className="dropdown-btn"onClick={() => toggleDropdown("industries")}>Industries</button>
                    {activeDropdown === "industries" && (
                        <ul className="dropdown-menu">
                            <li><a href="/industries/travel-hospitality"><b>Travel & Hospitality</b></a>
                            <ul className="mini-dropdown-menu">
                                <li><a href="/industries/airline">Airline</a></li>
                                <li><a href="/industries/travel-management">Travel Management Companies</a></li>
                                <li><a href="/industries/hospitality">Hospitality</a></li>
                           </ul>
                            </li>
                            <li><a href="/industries/healthcare"><b>Healthcare</b></a>
                            <ul className="mini-dropdown-menu">
                                <li><a href="/industries/payer">Payer</a></li>
                                <li><a href="/industries/provider">Provider</a></li>
                                <li><a href="/industries/pharma">Pharma & Life Sciences</a></li>
                            </ul>
                            </li>
                            <li><a href="/industries/banking-finance"><b>Banking & Finance</b></a></li>
                            <li><a href="/industries/insurance"><b>Insurance</b></a></li>
                            <li><a href="/industries/professional-services"><b>Professional Services</b></a></li>
                        </ul>
                    )}
                </li>
                
                <li className="dropdown">
                    <button className="dropdown-btn"onClick={() => toggleDropdown("about")}>About</button>
                    {activeDropdown === "about" && (
                        <ul className="dropdown-menu">
                            <li><a href="/about-us"><b>About Us</b></a></li>
                            <li><a href="/mission-vision"><b>Mission and Vision</b></a></li>
                            <li><a href="/alliances"><b>Alliances</b></a></li>
                            <li><a href="/leadership"><b>Leadership</b></a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown">
                    <button className="dropdown-btn"onClick={() => toggleDropdown("insights")}>Insights</button>
                    {activeDropdown === "insights" && (
                        <ul className="dropdown-menu">
                            <li><a href="/insights/brochures"><b>Brochures</b></a></li>
                            <li><a href="/insights/blogs"><b>Blogs</b></a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown">
                    <button className="dropdown-btn" onClick={() => toggleDropdown("careers")}>Careers</button>
                    {activeDropdown === "careers" && (
                        <ul className="dropdown-menu">
                            <li ><a href="/life_at_shree_partners"><b>Life at Shree Partners</b></a></li>
                        </ul>
                    )}
                </li>
                <li><a href="/contact" className="btn btn-solid" >Contact Us</a></li>
            </ul>
        </div>
    </header>
  );
}

export default Navbar;