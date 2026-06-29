import { Link } from "react-router-dom";

import heroImg from "../assets/airline-intro.jpeg";
import solutionImg from "../assets/travel-solution.jpeg";
import valueImg from "../assets/travel-value.jpeg";
import bulbIcon from "../assets/bulb.jpeg";
import "../styles/TravelHospitality.css";
function TravelHospitality() {
  return (
    <div className="travel-page">
      <section className="travel-hero">
        <div className="travel-overlay">
          <h1>Travel and Hospitality</h1>
          <p>
            Transform your business with
            <br />
            industry-leading technology
          </p>
        </div>
        <img src={heroImg} alt="Travel Hospitality" />
      </section>
      <section className="travel-intro">
        <div className="travel-content">
          <div className="travel-text">
            <p>
              The travel and hospitality industry is witnessing a seismic shift
              in customer behaviors due to increased competition, price wars and
              new, disruptive technologies.
            </p>
            <h2>Shree Partners Solutions</h2>
            <p>
              Shree Partners helps travel, transportation and hospitality
              clients improve business processes, manage costs, and grow revenue
              through transformative technologies.
            </p>
            <Link to="/Contact" className="contact-btn">
              Contact Us
            </Link>
          </div>
          <div className="travel-image">
            <img src={solutionImg} alt="Travel Solution" />
          </div>
        </div>
      </section>
      <div className="segments-grid">
        <Link to="/industries/airline" className="segment-card">
          <i className="fa-solid fa-plane segment-icon"></i>
          <span>Airlines</span>
          <i className="fa-solid fa-arrow-right arrow-icon"></i>
        </Link>

        <Link to="/industries/travel-management" className="segment-card">
          <i className="fa-solid fa-suitcase-rolling segment-icon"></i>
          <span>Travel Management Companies (TMC)</span>
          <i className="fa-solid fa-arrow-right arrow-icon"></i>
        </Link>

        <Link to="/industries/hospitality" className="segment-card">
          <i className="fa-solid fa-hotel segment-icon"></i>
          <span>Hospitality</span>
          <i className="fa-solid fa-arrow-right arrow-icon"></i>
        </Link>
      </div>
      <section className="business-value">
        <h2>Business Value</h2>
        <p className="business-text">
          Benefits to travel and hospitality customers include:
        </p>
        <div className="business-wrapper">
          <div className="business-box">
            <i className="fa-regular fa-lightbulb business-icon"></i>
            <ul>
              <li>
                <strong>Reduce</strong> IT operational expenses by up to 30%
              </li>
              <li>
                <strong>Improve</strong> ROI on capital expenses
              </li>
              <li>
                <strong>Integrate</strong> IT, BPO and infrastructure services
              </li>
              <li>
                <strong>Grow</strong> to new heights with innovation networks
              </li>
            </ul>
          </div>
          <div className="business-image">
            <img src={valueImg} alt="Business Value" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default TravelHospitality;
