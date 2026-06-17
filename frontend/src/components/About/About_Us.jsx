import "./About_Us.css";
import heroImg from "../../assets/about-banner.avif";
import aboutImg from "../../assets/about-company.webp";
import worldMap from "../../assets/world-map.png";
import isoImg from "../../assets/iso-logo.png";
import securityImg from "../../assets/security.jpg";
import successImg from "../../assets/business-success.png";
function About_Us() {
  return (
    <div className="about-us">
      <section className="about-hero">
        <div className="about-hero-image"><img src={heroImg} alt="About Shree Partners" /></div>
        <div className="about-title"><h1>About Shree Partners</h1></div>
      </section>
      <section className="about-intro">
        <p>Shree Partners is a digital transformation and technology solutions company that helps customers increase profitability by designing, developing, implementing and maintaining innovative business solutions that drive revenue and reduce cost.</p>
      </section>
      <section className="about-company">
        <div className="about-company-image"><img src={aboutImg} alt="About Company" /></div>
        <div className="about-company-content">
          <p>Founded in 2008, our mission is to deliver high-performance applications by leveraging deep domain competencies. We serve diverse client businesses in travel and hospitality, healthcare, banking and financial services, insurance and professional services.</p>
          <p>Our innovative, technology-based solutions feature a combination of software design, development, implementation and global support services.</p>
          <h3>Our name says it all</h3>
          <p>In India, <em>Shree</em> is a Hindi greeting that means prosperity, wealth and good things. Together, as<em> Partners</em> with our clients, our greatest desire is to help you transform your business and achieve business success.</p>
        </div>
      </section>
      <section className="global-section">
        <div className="global-map"><img src={worldMap} alt="Global Presence" /></div>
      </section>
      <section className="iso-section">
        <h2>Shree InfoSoft, ISO Certified</h2>
        <div className="iso-container">
          <div className="iso-card">
            <div className="iso-logo"><img src={isoImg} alt="ISO" /></div>
            <div className="iso-content">
              <p>Shree InfoSoft is an ISO 27001 certified company that is committed to delivering defect-free services and maintaining the highest levels of quality and security.</p>
              <p>Clients benefit from our ISO certification through lower expenses, improved security, clearly defined departmental roles and responsibilities, and standardized procedures.</p>
            </div>
          </div>
          <div className="iso-image"><img src={securityImg} alt="Security" /></div>
        </div>
      </section>
      <section className="success-section">
        <h2>Business Model Critical Success Factors</h2>
        <img src={successImg} alt="Business Success Factors" className="success-image"/>
      </section>
    </div>
  );
}
export default About_Us;