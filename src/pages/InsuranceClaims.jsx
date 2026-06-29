import heroImg from "../assets/insurance.avif";
import insuranceImg from "../assets/insurance-service.jpeg";
import valueImg from "../assets/insurance-value.jpeg";
import { FaLightbulb } from "react-icons/fa";
function InsuranceClaims() {
  return (
    <div className="insurance-page">
      <section className="insurance-hero">
        <img src={heroImg} alt="Insurance" />
        <div className="insurance-overlay">
          <h1>Insurance</h1>
          <p>Empower your business with<br />innovation and digital transformation</p>
        </div>
      </section>
      <section className="insurance-intro">
        <div className="insurance-intro-content">
          <div className="insurance-text">
            <p>The insurance industry is facing disruption like never before. Challenges include increased competition from new entrants, rising customer demands and expectations, fraudulent practices, new products and services flooding the market, and escalating operational costs.</p>
            <p>Shree Partners enables insurers to tackle these challenges with our industry-leading solutions for claims and portal management, fraud prevention, cybersecurity, risk prevention and more.</p>
            <button>Contact Us</button>
          </div>
          <div className="insurance-image"><img src={insuranceImg} alt="Insurance Solutions" /></div>
        </div>
      </section>
      <section className="insurance-services">
        <h2>Key Service Offerings</h2>
        <div className="insurance-services-grid">
          <div className="insurance-card">
            <h3>Portal Services</h3>
            <h4>Portals for Clients / Intermediaries</h4>
            <p>Client portals are essential for every insurance provider, offering access to policies, documents and customer information. Deliver a seamless digital experience across all channels and devices while integrating analytics and BI dashboards.</p>
          </div>
          <div className="insurance-card">
            <h3>Claims</h3>
            <h4>Validation, Notifications, Fraud Management, Settlements</h4>
            <p>AI and machine-learning enabled solutions help settle claims faster, prevent fraud and increase operational efficiency. Integrate web and mobile applications with analytics to gain real-time business insights.</p>
          </div>
          <div className="insurance-card">
            <h3>Customer Insights and Growth</h3>
            <h4>Customer Need Analysis, Dashboard and Reporting</h4>
            <p>Turn valuable customer data into meaningful business insights through predictive and prescriptive analytics that help you stay ahead of competitors.</p>
          </div>
          <div className="insurance-card">
            <h3>Risk and Regulatory Compliance</h3>
            <p>We specialize in risk management and regulatory compliance, offering consulting, operational and reporting solutions.</p>
            <ul>
              <li><strong>Consulting:</strong> Readiness Index, Technology Assessment, Roadmap and Strategy</li>
              <li><strong>Operational:</strong> Data Governance, Data Profiling, Data Mapping, DLP, Automation, Policy Processes and Training</li>
              <li><strong>Reporting:</strong> Validation Services, Audits, Monitoring, Measurement and Compliance Automation</li>
            </ul>
          </div>
          <div className="insurance-card">
            <h3>Winning Technology</h3>
            <p>Today's insurance organizations need the right blend of technologies and processes to thrive in a complex digital environment. We help improve customer experience, manage operations and meet regulatory requirements through innovative technology solutions.</p>
          </div>
        </div>
      </section>
      <section className="insurance-value">
        <h2>Business Value</h2>
        <p className="value-subtitle">Benefits to insurance customers include:</p>
        <div className="insurance-value-content">
          <div className="insurance-value-box">
            <FaLightbulb className="insurance-value-icon" />
            <ul>
              <li><strong>Increase</strong> operational efficiency</li>
              <li><strong>Reduce</strong> time to market</li>
              <li><strong>Personalize</strong> the customer experience</li>
              <li><strong>Improve</strong> claims servicing</li>
              <li><strong>Retain</strong> and grow your customer base</li>
            </ul>
          </div>
          <div className="insurance-value-image"><img src={valueImg} alt="Business Value" /></div>
        </div>
      </section>
    </div>
  );
}
export default InsuranceClaims;