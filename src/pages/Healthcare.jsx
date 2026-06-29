import heroImg from "../assets/healthcare.jpg";
import introImg from "../assets/healthcare-intro.jpeg";
import businessImg from "../assets/healthcare-business.jpeg";
function Healthcare() {
  return (
    <div className="healthcare">
      <section className="healthcare-hero">
        <img src={heroImg} alt="Healthcare" />
        <div className="healthcare-overlay">
          <h1>Healthcare</h1>
          <p>Harness the power of technology<br />to deliver greater value</p>
        </div>
      </section>
      <section className="healthcare-intro">
        <div className="healthcare-content">
          <div className="healthcare-text">
            <p>The healthcare industry is on a continuous quest to improve patient experience, optimize health outcomes, and reduce costs while ensuring regulatory compliance.</p>
            <p>Shree Partners helps you grow your business by leveraging emerging technologies and industry best practices that lead to successful outcomes.</p>
           <a href="/contact" className="contact-btn">Contact Us</a>
          </div>
          <div className="healthcare-image"><img src={introImg} alt="Healthcare Industry" /></div>
        </div>
      </section>
      <section className="segments">
        <h2>Segments We Serve</h2>
        <p>Shree Partners offers comprehensive solutions for:</p>
        <div className="segment-grid">
          <a href="/industries/healthcare/payer"className="segment-card">
            <i className="fa-solid fa-shield-heart segment-icon"></i>
            <h3>Payer</h3>
            <ul>
              <li>Enhance business processes</li>
              <li>Implement full managed care</li>
              <li>Modernize legacy applications</li>
              <li>Comply with new regulations</li>
              <li>Streamline and innovate operations</li>
            </ul>
            <span>READ MORE</span>
          </a>
          <a href="/industries/healthcare/provider" className="segment-card">
            <i className="fa-solid fa-hand-holding-heart segment-icon"></i>
            <h3>Provider</h3>
            <ul>
              <li>Focus on your core mission</li>
              <li>Deliver the highest quality care</li>
              <li>Make processes more effective</li>
              <li>Improve operational efficiency</li>
            </ul>
            <span>READ MORE</span>
          </a>
          <a href="/industries/healthcare/pharma" className="segment-card">
            <i className="fa-solid fa-microscope segment-icon"></i>
            <h3>Pharma & Life Sciences</h3>
            <ul>
              <li>Produce the highest quality products</li>
              <li>Go to market faster</li>
              <li>Reduce costs</li>
            </ul>
            <span>READ MORE</span>
          </a>
        </div>
      </section>
      <section className="offerings">
        <h2>Key Service Offerings</h2>
        <div className="offer-grid">
          <div className="offer-card">
            <h3>Regulatory Compliance</h3>
            <p>HIPAA, HL7, PHI and CFR compliance solutions that ensure secure healthcare operations.</p>
          </div>
          <div className="offer-card">
            <h3>System Integration</h3>
            <ul>
              <li>Hospital Management Information System</li>
              <li>Laboratory Information System</li>
              <li>Radiology Information System</li>
              <li>Medical Records Management</li>
            </ul>
          </div>
          <div className="offer-card">
            <h3>eHealth & mHealth Solutions</h3>
            <p>Modern patient care through cloud,mobility and analytics solutions.</p>
          </div>
          <div className="offer-card">
            <h3>Analytics Solutions / Clinical BI</h3>
            <p>Improve engagement, gain insights and enhance operational efficiency.</p>
          </div>
          <div className="offer-card">
            <h3>Health Information System (HIS)</h3>
            <p>Secure healthcare data management and information exchange systems.</p>
          </div>
          <div className="offer-card">
            <h3>Clinical & Patient Portal</h3>
            <p>End-to-end portal design, development and integration.</p>
          </div>
        </div>
      </section>
      <section className="business-value">
        <h2>Business Value</h2>
        <p>Benefits to healthcare customers include:</p>
        <div className="business-wrapper">
          <div className="business-card">
            <i className="fa-regular fa-lightbulb business-icon"></i>
            <ul>
              <li><strong>Increase</strong> patient care and engagement through mobile platforms and automation.</li>
              <li><strong>Enhance</strong> operational efficiencies through integrated technology solutions.</li>
              <li><strong>Improve</strong> business results using analytics-driven insights.</li>
              <li><strong>Grow</strong> revenue through innovative healthcare services and capabilities.</li>
            </ul>
          </div>
          <div className="business-image"><img src={businessImg} alt="Business Value" /></div>
        </div>
      </section>
    </div>
  );
}
export default Healthcare;