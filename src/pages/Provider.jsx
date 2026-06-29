import heroImg from "../assets/provider-banner.jpg";
import introImg from "../assets/provider-intro.webp";
function Provider() {
  return (
    <div className="provider">
      <section className="provider-hero">
        <img src={heroImg} alt="Provider" />
        <div className="provider-overlay">
          <h1>Provider</h1>
        </div>
      </section>
      <section className="provider-intro">
        <h2>Navigating the Future of Healthcare with Advanced Technology Solutions</h2>
        <div className="provider-intro-content">
          <div className="provider-text">
            <p>To stay competitive, healthcare providers must embrace new business models that help them deliver higher levels of quality care at affordable costs.</p>
            <p> Reforms and regulations are driving the need for greater collaboration and accountability while changing reimbursement models force providers to consider different patient care delivery models.</p>
            <h3>In this “new normal,” how can healthcare provider deliver higher levels of quality care, collaborate better, and engage more fully with consumers?</h3>
            <p>At Shree Partners, we work closely with healthcare providers to deliver innovative services and solutions that help create patient-centric systems that are interconnected, engaging and efficient.</p>
          </div>
          <div className="provider-image"><img src={introImg} alt="Provider" /></div>
        </div>
      </section>
      <section className="provider-services">
        <h2>Key Service Offerings</h2>
        <p>From consulting through implementation and ongoing support, we offer these solutions and services:</p>
        <div className="provider-grid">
          <div className="provider-card">
            <h3>Consulting Services</h3>
            <p>We help optimize your business end-to-end: from assessment to strategy to implementation.</p>
            <ul>
              <li>Integrated Health Management</li>
              <li>Hospital Performance Management</li>
              <li>Clinical Care Management</li>
              <li>EHR & HIE Systems</li>
              <li>Health Intelligence and Analytics</li>
              <li>ACO Compliance & Reviews</li>
              <li>Regulatory Compliance (HIPPA, HL7)</li>
            </ul>
          </div>
          <div className="provider-card">
            <h3>Technology Solutions and Services</h3>
            <p>We offer contemporary and disruptive technology solutions that accelerate digital transformation for healthcare providers.</p>
            <ul>
              <li>System Integration</li>
              <li>Industry and Platform Solutions</li>
              <li>Infrastructure Solutions and Services</li>
              <li>Application Development, Enhancement and Support</li>
              <li>Clinical Data Integration</li>
              <li>Enterprise Data Warehousing</li>
              <li>Quality Assurance Services</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Provider;