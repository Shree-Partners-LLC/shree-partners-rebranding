import "./PharmaAndLifeSciences.css";
import heroImg from "../../../assets/pharma-banner.webp";
import introImg from "../../../assets/pharma-intro.jpeg";
function PharmaAndLifeSciences() {
  return (
    <div className="pharma">
      <section className="pharma-hero">
        <img src={heroImg} alt="Pharma & Life Sciences" />
        <div className="pharma-overlay"><h1>Pharma & Life Sciences</h1></div>
      </section>
      <section className="pharma-intro">
        <h2>Delivering Solutions that Transform Lives</h2>
        <div className="pharma-intro-content">
          <div className="pharma-text">
            <p>The life sciences industry faces significant challenges due to shifts toward biotech, government regulations, increased generic competition, changing product demands, and a growing patient-centric focus.</p>
            <p>Mergers and acquisitions force companies with disparate systems to seek greater synergies and technologies that “speak the same language.” Players require new business models that deliver superior business outcomes and optimize costs, reduce time to market, and meet regulatory requirements.</p>
            <p><strong>At Shree Partners</strong>, we work closely with you to enable your digital transformation journey. We leverage next-generation technology solutions and extensive domain expertise to optimize your business success across the value chain.</p>
          </div>
          <div className="pharma-image"><img src={introImg} alt="Pharma Services" /></div>
        </div>
      </section>
      <section className="pharma-services">
        <h2>Key Service Offerings</h2>
        <div className="pharma-grid">
          <div className="pharma-card">
            <h3>Consulting Services</h3>
            <p>Shree Partners offers consulting services and solutions that help global pharmaceutical, biotech and life sciences companies transform their business models.</p>
            <ul>
              <li>eTMF Services for Clinical Trials</li>
              <li>Clinical Trial Management System</li>
              <li>Document Management System</li>
              <li>Gap Analysis and Quality Management System</li>
              <li>Business Intelligence Solutions</li>
              <li>Regulatory Compliance (GCP, GLP, 21 CFR Part 11)</li>
              <li>Protocol Management</li>
            </ul>
          </div>
          <div className="pharma-card">
            <h3>Technology Solutions and Services</h3>
            <p>We help you modernize your IT by embracing emerging technologies, solutions and innovations that improve operational efficiency.</p>
            <ul>
              <li>Infrastructure Services</li>
              <li>Application Development and Support</li>
              <li>Data Warehouse Management</li>
              <li>Automation Services</li>
              <li>Clinical Data Engineering and Analytics</li>
              <li>Product Engineering</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PharmaAndLifeSciences;