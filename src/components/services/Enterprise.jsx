import Navbar from "../Navbar";
import Footer from "../Footer";

import "./ApplicationServices.css";
import serviceImg from "../../assets/images4.jpeg";
import detailsImg from "../../assets/images6.webp";
import storyImg from "../../assets/images5.jpeg";
import {
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
  FaCloud,
  FaCodeBranch,
} from "react-icons/fa";
export default function DataManagement() {
  return (
    <>
      <Navbar />
      <section className="app-services">
        <div className="left-panel">
          <div className="content">
            <h1>
              <span>Enterprise Operations</span>
              <br />
              <span>Transformation</span>
            </h1>

            <p>
              Transform business processes with automation and intelligent IT
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
            <h2>Transforming Business Through Intelligent Automation</h2>

            <p>
              Enterprise operations management faces a huge paradigm shift with
              the advent of new disruptive technologies. Today’s business
              leaders realize that to accelerate future growth, they must break
              down organizational barriers, create more transparent processes,
              and align IT with company goals. Organizations that say “yes” to
              enterprise improvements see results including process
              efficiencies, cost reductions, reduced cycle times and better
              customer relationships
            </p>

            <p>
              At <b>Shree Partners</b>, our enterprise management solutions help
              clients drive their transformational journey through data centers,
              cloud migration, development operations, modernized networks and
              workplaces, safety and security improvements, and built-to-last
              systems. Our extensive knowledge of infrastructures, applications
              and analytics helps you achieve your company goals and create a
              more integrated, agile and profitable organization.
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
          <a href="/network-operations" className="offering-card">
            <FaNetworkWired className="offering-icon" />
            <h3>Network Operations Center</h3>
          </a>

          <a href="/data-center-operations" className="offering-card">
            <FaServer className="offering-icon" />
            <h3>Data Center Operations</h3>
          </a>

          <a href="/cybersecurity" className="offering-card">
            <FaShieldAlt className="offering-icon" />
            <h3>Cybersecurity and Threat Management</h3>
          </a>

          <a href="/cloud-management" className="offering-card">
            <FaCloud className="offering-icon" />
            <h3>Cloud Management</h3>
          </a>
          <a href="/devops" className="offering-card">
            <FaCodeBranch className="offering-icon" />
            <h3>DevOps Consulting and Implementation</h3>
          </a>
        </div>
      </section>
      <section className="success-story">
        <div className="story-header">
          <span>Success Story</span>
          <h2>Travel Management Company</h2>
          <p>Needed business continuity with a network operations center</p>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <h3>Solution</h3>

            <ul>
              <li>Deployed NOC to monitor network and critical systems</li>

              <li>Provided reports on-demand to monitor progress</li>

              <li>
                Analyzed IP traffic to assess network performance and usage
              </li>
            </ul>
          </div>

          <div className="story-card">
            <h3>Results</h3>

            <ul>
              <li>Improved service responses that facilitated high CSAT</li>

              <li>Reduced costs with SD Wan tool</li>
              <li>
                Enhanced traffic pattern for better application and link
                availability and performance
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
