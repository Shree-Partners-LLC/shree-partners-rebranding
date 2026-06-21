import "./TravelManagementCompanies.css";
import heroImg from "../../../assets/travel.webp";
import introImg from "../../../assets/tmc-intro.jpeg";
import businessImg from "../../../assets/tmc-business.jpeg";
import successImg from "../../../assets/tmc-success.jpeg";
function TravelManagementCompanies() {
  return (
    <div className="tmc">
      <section className="tmc-hero">
        <img src={heroImg} alt="Travel Management Companies" />
        <div className="tmc-overlay">
          <h1>Travel Management Companies</h1>
        </div>
      </section>
      <section className="tmc-intro">
        <h2>Deliver a personalized, profitable customer experience</h2>
        <div className="tmc-intro-content">
          <div className="tmc-text">
            <p>Travel management companies (TMC) face a host of challenges in today’s complex and ever-changing digital environment.</p>
            <p>Shree Partners helps TMCs address these challenges with expert services and solutions including intelligent data analytics, automation, application development, cloud and infrastructure services, managed services and knowledge process outsourcing.</p>
          </div>
          <div className="tmc-image">
            <img src={introImg} alt="TMC" />
          </div>
        </div>
      </section>
      <section className="tmc-box-section">
        <div className="tmc-box">
          <h3>TMC Challenges</h3>
          <ul>
            <li>Multiple channels causing fragmentation</li>
            <li>Airline commission elimination</li>
            <li>Complex travel distribution chains</li>
            <li>Need proactive customer information</li>
            <li>Lack of integrated travel knowledge</li>
            <li>24/7 customer service expectations</li>
            <li>Competition from low-cost GDS players</li>
            <li>Increased Opex and Capex costs</li>
          </ul>
        </div>
        <div className="tmc-box">
          <h3>Shree Partners Solutions</h3>
          <ul>
            <li>Agile and secure infrastructure services</li>
            <li>Big data solutions</li>
            <li>Booking data unification</li>
            <li>Automation testing</li>
            <li>Cybersecurity solutions</li>
            <li>DevOps solutions</li>
            <li>Predictive analytics</li>
            <li>Mobility solutions</li>
          </ul>
        </div>
      </section>
      <section className="tmc-business">
        <h2>Business Value</h2>
        <p>Benefits to airline customers include:</p>
        <div className="tmc-business-content">
          <div className="tmc-business-card">
            <i className="fa-regular fa-gem tmc-icon"></i>
            <ul>
              <li><strong>Increase</strong> operational efficiencies</li>
              <li><strong>Reduce</strong> costs and mitigate risks</li>
              <li><strong>Create</strong> actionable business insights</li>
              <li><strong>Enable</strong> customer growth and retention</li>
              <li><strong>Empower</strong> multichannel distribution</li>
            </ul>
          </div>
          <div className="tmc-business-image">
            <img src={businessImg} alt="Business Value" />
          </div>
        </div>
      </section>
      <section className="tmc-success">
        <h2>Success Story</h2>
        <h3>Travel Management Company</h3>
        <p>Developed a DevOps consulting solution to enable faster support for travel apps 24/7</p>
        <div className="tmc-success-grid">
          <div className="tmc-success-card">
            <i className="fa-solid fa-chart-line tmc-icon"></i>
            <h4>Solution</h4>
            <ul>
              <li>Centralized offshore support</li>
              <li>Reduced deployment time</li>
              <li>Optimized workflow processes</li>
            </ul>
          </div>
          <div className="tmc-success-card">
             <i className="fa-solid fa-chart-line tmc-icon"></i>
            <h4>Results</h4>
            <ul>
              <li>Resolved issues up to 60% faster</li>
              <li>Reduced costly escalations by 85%</li>
              <li>Reduced production release time</li>
            </ul>
          </div>
          <div className="tmc-success-image"><img src={successImg} alt="Success Story" /></div>
        </div>
      </section>
    </div>
  );
}
export default TravelManagementCompanies;