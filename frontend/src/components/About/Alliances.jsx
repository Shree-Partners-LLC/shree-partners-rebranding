import "./Alliances.css";
import heroImg from "../../assets/alliances-banner.jpg";
import awsLogo from "../../assets/aws-partner.png";
import sitecoreLogo from "../../assets/sitecore-logo.png";
import isoLogo from "../../assets/iso27001.png";
function Alliances() {
  return (
    <div className="alliances">
      <section className="alliances-hero">
        <div className="alliances-hero-image"><img src={heroImg} alt="Alliances" /></div>
        <div className="alliances-title"><h1>Alliances</h1></div>
      </section>
      <section className="alliances-intro">
        <p><strong>At Shree Partners,</strong> we believe that partnerships produce substantial value for everyone involved. Partnering helps all players collaborate more effectively to address changing market needs and dynamics. Through partnerships, our customers reap the benefits of collaborative problem-solving, faster speed to market, and leading-edge technology expertise.</p>
      </section>
      <section className="alliances-content">
        <div className="alliances-card">
          <h2>Shree Partners proudly partners with these global players</h2>
          <div className="partner-item">
            <img src={awsLogo} alt="AWS Partner" />
            <p>Shree Partners is a consulting Partner of AWS (Amazon Web Services) to provide services that includes a mixture of infrastructure as a service (IaaS), platform as a service (PaaS) and packaged software as a service (SaaS) offerings.</p>
          </div>
          <div className="partner-divider"></div>
          <div className="partner-item">
            <img src={sitecoreLogo} alt="Sitecore" />
            <p>Sitecore is the global leader in customer experience management, bringing together content, commerce and data into one connected platform.</p>
          </div>
        </div>
        <div className="alliances-card">
          <h2>Certifications</h2>
          <div className="certifications">
            <img src={isoLogo} alt="Certificate" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Alliances;