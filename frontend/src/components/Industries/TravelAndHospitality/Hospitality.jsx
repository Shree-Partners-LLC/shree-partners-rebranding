import "./Hospitality.css";
import heroImg from "../../../assets/hospitality-banner.jpg";
import introImg from "../../../assets/hospitality-intro.jpeg";
import businessImg from "../../../assets/hospitality-business.jpeg";
function Hospitality() {
  return (
    <div className="hospitality">
      <section className="hospitality-hero">
        <img src={heroImg} alt="Hospitality" />
        <div className="hospitality-overlay"><h1>Hospitality</h1></div>
      </section>
      <section className="hospitality-intro">
        <h2>Putting the customer at the center of every guest experience</h2>
        <div className="hospitality-intro-content">
          <div className="hospitality-text">
            <p>The hospitality industry is at a technology crossroads. In today’s ever-changing global marketplace, hotels must find new ways to articulate, adopt and deliver consistent brand promises that exceed customer expectations.</p>
            <p>Multiple challenges exist for today’s hospitality providers, including technology disruption, changing customer loyalty and expectations, increased competition, branding, staffing and retention. Understanding how to personalize the guest experience is key to delivering customer loyalty.</p>
          </div>
          <div className="hospitality-image">
            <img src={introImg} alt="Hospitality Services" />
          </div>
        </div>
      </section>
      <section className="hospitality-services">
        <div className="service-card">
          <h3>Key Service Offerings</h3>
          <p>Shree Partners supports clients with domain consultancy, project management, business intelligence and analytics, application development and support, infrastructure service management and business process management services.</p>
          <p>With our integrated suite of IT and outsourcing services, we help hospitality companies unlock their growth potential.</p>
        </div>
        <div className="service-card">
          <h3>Specialized Services</h3>
          <ul>
            <li>Reservation Systems</li>
            <li>Hotel Management Systems</li>
            <li>Business Intelligence and Analytics</li>
            <li>Data Management</li>
            <li>Hotel Rate Audit</li>
            <li>Mobility Solutions</li>
            <li>Customer Interaction Management</li>
            <li>Automation Testing</li>
          </ul>
        </div>
      </section>
      <section className="hospitality-business">
        <h2>Business Value</h2>
        <p>Benefits to hospitality clients include:</p>
        <div className="business-content">
          <div className="business-card">
            <i className="fa-regular fa-gem business-icon"></i>
            <ul>
              <li>Partnership with eco-sustainable companies to provide infrastructure and facility solutions</li>
              <li>Robust service delivery model with SLA compliance and customer satisfaction focus</li>
              <li>Innovation labs delivering cutting-edge solutions</li>
              <li>Access to multiple Centers of Excellence (CoE)</li>
              <li>Annual productivity improvements up to 25%</li>
            </ul>
          </div>
          <div className="business-image">
            <img src={businessImg} alt="Business Value" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Hospitality;