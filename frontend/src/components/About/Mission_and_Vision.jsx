import "./Mission_and_Vision.css";
import heroImg from "../../assets/mission-banner.avif";
import missionImg from "../../assets/mission-vision.webp";
function Mission_and_Vision() {
  return (
    <div className="mission-vision">
      <section className="mv-hero">
        <div className="mv-hero-image">
          <img src={heroImg} alt="Mission and Vision" />
        </div>
        <div className="mv-title">
          <h1>Mission and Vision</h1>
        </div>
      </section>
      <section className="mv-content">
        <div className="mv-text">
          <p>At Shree Partners, <strong>our mission</strong> is to create and deliver leading technologies that enable and enhance our customers’ and people’s lives. We aspire to be their trusted technology partner, leading the way with innovative solutions that solve business problems and enable success.</p>
          <ul>
            <li>Technology that bridges gaps</li>
            <li>Services that offer a human touch</li>
            <li>Solutions that elevate the customer experience</li>
          </ul>
          <h2>Our name says it all</h2>
          <p>In India, <em>Shree</em> is a Hindi greeting that means “prosperity, wealth and good things.” Together, as<em> Partners</em> with our clients, our greatest desire is to help you transform your business and achieve business success!</p>
          <p><strong>Our vision</strong> is to deliver technology solutions that make our clients smile. We do this by:</p>
          <ul>
            <li>Enabling customer success</li>
            <li>Accelerating time-to-market</li>
            <li>Fostering innovation</li>
          </ul>
        </div>
        <div className="mv-image"><img src={missionImg} alt="Mission Vision" /></div>
      </section>
    </div>
  );
}
export default Mission_and_Vision;