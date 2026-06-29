import heroImg from "../assets/airline-banner.webp";
import "../styles/Airline.css";
import introImg from "../assets/airline-intro.jpeg";
import serviceImg from "../assets/airline-service.jpeg";
function Airline() {
  return (
    <div className="airline">
      <section className="airline-hero">
        <img src={heroImg} alt="Airline" />
        <div className="airline-overlay"><h1>Airlines</h1></div>
      </section>
      <section className="airline-intro">
        <h2>Deliver new growth with our domain and technology expertise</h2>
        <div className="airline-intro-content">
          <div className="airline-text">
            <p>The airline industry is a critical business enabler that supports the global flow of people and cargo. Today, the industry is challenged to create highly personalized customer experiences and reduce operational costs while fostering stronger industry connections.</p>
            <p>Changing business models are leading to large-scale transformations in airline IT and operations. Airlines seek to enhance their digital e-commerce strategies to improve profitability and enhance the overall customer experience.</p>
          </div>
          <div className="airline-image">
            <img src={introImg} alt="Airline Customer" />
          </div>
        </div>
      </section>
      <section className="airline-box-section">
        <div className="airline-box">
          <h3>Airline Challenges</h3>
          <ul>
            <li><strong>Sustain</strong> and thrive through competition</li>
            <li><strong>Increase</strong> conversion and revenues</li>
            <li><strong>Improve</strong> operational efficiencies</li>
            <li><strong>Overcome</strong> technology disruptions</li>
            <li><strong>Grow</strong> revenue</li>
          </ul>
        </div>
        <div className="airline-box">
          <h3>Shree Partners Solutions</h3>
          <p>With our deep airline domain and technology expertise and fully integrated managed services offering, we enable airlines to improve service quality levels for their customers and business users.</p>
          <p>We help today's airlines create enterprise IT strategy, ensure regulatory compliance, address security concerns and maintain networks to achieve business goals.</p>
        </div>
      </section>
      <section className="service-offerings">
        <h2>Key Service Offerings</h2>
        <div className="service-wrapper">
          <div className="service-image"><img src={serviceImg} alt="Service" /></div>
          <div className="service-list">
            <ul>
              <li>Data management and analytics</li>
              <li>Automation testing – web, mobile, kiosk</li>
              <li>Airline reservation systems</li>
              <li>Departure control systems</li>
              <li>PNR streaming</li>
            </ul>
            <ul>
              <li>End-to-end quality assurance</li>
              <li>Content management system development</li>
              <li>Booking engine</li>
              <li>NDC interfaces</li>
              <li>Beacon integration</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="business-value">
        <h2>Business Value</h2>
        <p>Benefits to airline customers include:</p>
        <div className="value-grid">
          <div className="value-card">
            <i className="fa-solid fa-piggy-bank value-icon"></i>
            <h3>Save costs</h3>
            <ul>
              <li>Increased offshore leverage</li>
              <li>Annual productivity increases</li>
              <li>ITIL-based service delivery framework</li>
            </ul>
          </div>
          <div className="value-card">
            <i className="fa-regular fa-clock value-icon"></i>
            <h3>Reduce time to market</h3>
            <ul>
              <li>Skilled resource pool</li>
              <li>Key industry partnerships</li>
              <li>Centers of excellence support</li>
            </ul>
          </div>
          <div className="value-card">
            <i className="fa-regular fa-gem value-icon"></i>
            <h3>Enhance quality of deliverables</h3>
            <ul>
              <li>Robust process framework</li>
              <li>Consistent global delivery model</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Airline;