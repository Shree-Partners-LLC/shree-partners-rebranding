import "./BankingAndFinance.css";
import heroImg from "../../assets/banking-banner.webp";
import bankingImg from "../../assets/banking-service.jpeg";
import valueImg from "../../assets/business-value.jpeg";
function BankingAndFinance() {
  return (
    <div className="banking-page">
      <section className="banking-hero">
        <img src={heroImg} alt="Banking and Finance" />
        <div className="banking-overlay">
          <h1>Banking and Finance</h1>
          <p>Fortify your IT foundation to meet<br />changing customer needs</p>
        </div>
      </section>
      <section className="banking-intro">
        <div className="banking-intro-content">
          <div className="banking-text">
            <p> Banking and financial organizations are witnessing increased disruption in key business areas including customer interaction, satisfaction, relationship management, servicing and business transparency.</p>
            <h2>Shree Partners Solutions</h2>
            <p>Shree Partners serves as your offshore partner to deliver improvements in customer servicing, operations and risk mitigation. Our leading-edge, secure systems help you quickly address market changes and create profitable customer relationships.</p>
            <a href="/contact" className="contact-btn">Contact Us</a>
          </div>
          <div className="banking-image">
            <img src={bankingImg} alt="Banking Solutions" />
          </div>
        </div>
      </section>
      <section className="segments">
        <h2>Segments We Serve</h2>
        <div className="segments-grid">
          <div className="segment-card">
            <div className="segment-head">
              <i className="fa-solid fa-building-columns segment-icon"></i>
              <h3>Banking and Diversified Financial Services</h3>
            </div>
            <ul>
              <li>Deposits</li>
              <li>Retail Banking</li>
              <li>Corporate Banking</li>
              <li>Consumer Credit</li>
              <li>Cards and Payments</li>
            </ul>
          </div>
          <div className="segment-card">
            <div className="segment-head">
              <i className="fa-solid fa-chart-line segment-icon"></i>
              <h3>Securities and Capital Market</h3>
            </div>
            <ul>
              <li>Brokerage</li>
              <li>Transfer Agencies</li>
              <li>Global Custody</li>
              <li>Exchanges</li>
              <li>Asset Management</li>
              <li>Wealth Management</li>
              <li>Investment Banking</li>
            </ul>
          </div>
          <div className="segment-card wide-card">
            <div className="segment-head">
              <i className="fa-solid fa-arrows-rotate segment-icon"></i>
              <h3>Integrated Services Portfolio</h3>
            </div>
            <p>Data Management | Enterprise Applications |Package Implementation | Consulting</p>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>Key Service Offerings</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Process Automation and Operations Support</h3>
            <h4>Customer Communications Management</h4>
            <p>By leveraging emerging technologies like robotic process automation and intelligent automation, we deliver process automation solutions that reduce operational times and eliminate manual tasks.</p>
          </div>
          <div className="service-card">
            <h3>Consumer Banking Analytics</h3>
            <h4>Big Data Solutions, BI / Reporting</h4>
            <p>Our data-driven solutions feature predictive and prescriptive analytic models that leverage valuable company and consumer data.</p>
          </div>
          <div className="service-card">
            <h3>Cards and Payments</h3>
            <h4>CMS, Fraud Management, Omni-channel Experience</h4>
            <p>Increased use of digital platforms has significantly elevated payment activities and customer engagement.</p>
          </div>
          <div className="service-card">
            <h3>Risk and Compliance</h3>
            <h4>Compliance Reporting, Data Analytics, Basel III</h4>
            <p>Our reporting solutions help organizations meet regulatory requirements while maintaining strong risk management practices.</p>
          </div>
        </div>
      </section>
      <section className="business-value">
        <h2>Business Value</h2>
        <p className="value-subtitle">Benefits to banking and finance customers include:</p>
        <div className="value-content">
          <div className="value-box">
            <i className="fa-regular fa-lightbulb value-icon"></i>
            <ul>
              <li><strong>Increase</strong> operational efficiencies</li>
              <li><strong>Reduce</strong> costs and mitigate risks</li>
              <li><strong>Create</strong> actionable business insights</li>
              <li><strong>Enable</strong> customer growth and retention</li>
              <li><strong>Empower</strong> multichannel distribution</li>
            </ul>
          </div>
          <div className="value-image"><img src={valueImg} alt="Business Value" /></div>
        </div>
      </section>
    </div>
  );
}
export default BankingAndFinance;