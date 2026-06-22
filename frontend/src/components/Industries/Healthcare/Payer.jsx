import "./Payer.css";

import heroImg from "../../../assets/payer-banner.webp";
import introImg from "../../../assets/payer-intro.jpeg";
function Payer() {
  return (
    <div className="payer">
      <section className="payer-hero">
        <img src={heroImg} alt="Payer" />
        <div className="payer-overlay"><h1>Payer</h1></div>
      </section>
      <section className="payer-intro">
        <h2>Empowering Innovation with the Best Technology</h2>
        <div className="payer-intro-content">
          <div className="payer-text">
            <p>Shree Partners' expertise in healthcare payment helps clients transform their business by leveraging the latest technology tools and processes.</p>
            <p>From managed care implementation to meeting regulatory mandates and supporting new products and services, Shree Partners helps you navigate the ins and outs of complicated healthcare management.</p>
            <h3>How will you deliver higher levels of service, value and information at lower costs?</h3>
            <p>We help redesign business processes using industry-leading technology expertise and domain knowledge. From consulting to strategy, implementation and support, we help reduce costs while improving the quality of care you provide.</p>
          </div>
          <div className="payer-image"><img src={introImg} alt="Payer Services" /></div>
        </div>
      </section>
      <section className="payer-services">
        <h2>Key Service Offerings</h2>
        <p>From consulting through implementation and ongoing support, we offer these solutions and services:</p>
        <div className="services-grid">
          <div className="service-card">
            <h3>Consulting Services</h3>
            <p>We help you transform business models, improve quality delivery and enable innovation.</p>
            <ul>
              <li>Integrated Health Management</li>
              <li>Health Intelligence & Analytics</li>
              <li>Claims Management</li>
              <li>Investigative Services / Fraud Management</li>
              <li>Intelligent Process Automation</li>
              <li>Self Service Front-end</li>
              <li>Regulatory Compliance</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Technology Solutions and Services</h3>
            <p>We help clients build future-ready ecosystems that lead to better business outcomes.</p>
            <ul>
              <li>System Integration</li>
              <li>Application Development & Support</li>
              <li>Claims Data Integration</li>
              <li>Enterprise Data Warehousing</li>
              <li>Infrastructure Services</li>
              <li>Portal Services</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Payer;