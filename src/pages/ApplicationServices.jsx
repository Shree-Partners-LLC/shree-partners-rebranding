import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./ApplicationServices.css";
import serviceImg from "../assets/application-services.jpg";
import detailsImg from "../assets/app-details.jpg";
import storyImg from "../assets/automation-story.jpeg";
import {
  FaCogs,
  FaLayerGroup,
  FaMobileAlt,
  FaBullseye,
  FaNetworkWired,
  FaCube,
} from "react-icons/fa";
export default function ApplicationServices() {
  return (
    <>
      <Navbar />
      <section className="app-services">
        <div className="left-panel">
          <div className="content">
            <h1>
              <span>Application Services</span>
              <br />
              <span>and Automation</span>
            </h1>

            <p>
              Your future-ready intelligent automation and application for
              accelerated business growth and cost optimization
            </p>
          </div>
        </div>
        <div
          className="right-panel"
          style={{
            backgroundImage: `
      linear-gradient(
        rgba(11,20,53,0.55),
        rgba(11,20,53,0.55)
      ),
      url(${serviceImg})
    `,
          }}
        ></div>
      </section>
      <section className="app-details">
        <div className="app-details-content">
          <div className="app-text">
            

            <p>
              Our Application Services and Automation solutions bring
              unparalleled opportunities through a domain-driven approach. With
              increased competition, today’s companies need all the benefits
              technology brings: cost savings, faster time to market,
              elimination of manual tasks, and omni-channel connectivity.
            </p>

            <p>
              At Shree Partners, our expertise in the multi-platform ecosystem
              makes us the perfect partner for clients looking to transition
              seamlessly from legacy systems to powerful new platforms. We help
              you leverage emerging technologies to make your operations more
              productive, efficient and profitable.
            </p>

            <button className="contact-btn">Contact Us</button>
          </div>

          <div className="app-image">
            <img src={detailsImg} alt="Application Services" />
          </div>
        </div>
      </section>
      <section className="service-offerings">
        <h2>Service Offerings</h2>

        <div className="offerings-grid">
          <a href="/test-automation" className="offering-card">
            <FaCogs className="offering-icon" />
            <h3>Test Automation</h3>
          </a>

          <a href="/full-stack-development" className="offering-card">
            <FaLayerGroup className="offering-icon" />
            <h3>Full Stack Development</h3>
          </a>

          <a href="/mobility" className="offering-card">
            <FaMobileAlt className="offering-icon" />
            <h3>Mobility</h3>
          </a>

          <a href="/digital-marketing" className="offering-card">
            <FaBullseye className="offering-icon" />
            <h3>Digital Marketing and Collaboration</h3>
          </a>

          <a href="/intranet-solutions" className="offering-card">
            <FaNetworkWired className="offering-icon" />
            <h3>Intranet Solutions</h3>
          </a>

          <a href="/product-engineering" className="offering-card">
            <FaCube className="offering-icon" />
            <h3>Product Engineering</h3>
          </a>
        </div>
      </section>
      <section className="success-story">
        <div className="story-header">
          <span>Success Story</span>
          <h2>Claims Management Company</h2>
          <p>
            Top claims management company leverages automation testing for
            continuity in large-scale operations.
          </p>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <h3>Solution</h3>

            <ul>
              <li>Introduced automation to speed up its testing operation</li>

              <li>
                Reduced cost by using behavior-driven development (BDD) solution
                with open source tools
              </li>

              <li>
                Automation testing and a unified framework helped roll out
                applications faster with an easier IDE
              </li>
            </ul>
          </div>

          <div className="story-card">
            <h3>Results</h3>

            <ul>
              <li>Execution time reduced from two man-days to two hours</li>

              <li>Build testing time reduced from days to hours</li>

              <li>
                Manual testing of the CMS application was required only for
                specific scenarios
              </li>
            </ul>
          </div>

          <div className="story-image">
            <img src={storyImg} alt="Automation Testing" />
          </div>
        </div>

        <div className="story-buttons">
          <button className="contact-btn">Contact Us</button>

          <button className="brochure-btn">Download Brochure</button>
        </div>
      </section>

      <Footer />
    </>
  );
}
