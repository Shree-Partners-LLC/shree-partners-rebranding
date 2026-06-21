import "./mobility.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../assets/application-services.jpg";
import Footer from "../components/Footer";
import mobilityImg from "../assets/mobility.jpeg";
import Navbar from "../components/Navbar";
function Mobility() {
  return (
    <>
      <Navbar />

      <section className="test-hero">
        <div className="hero-content">
          <h4>APPLICATION SERVICES AND AUTOMATION</h4>
          <h1>Mobility</h1>
        </div>

        <div className="hero-image">
          <img src={serviceImg} alt="Test Automation" />
          <img
            src={serviceImg}
            alt="Test Automation"
            style={{
              width: "500px",
              height: "300px",
              border: "5px solid green",
            }}
          />
        </div>
      </section>

      <section className="test-intro">
        <div className="container">
          <h2>Helping Clients Move Ahead</h2>

          <p>
            Incremental changes in the workplace have slowly transformed the way
            employees work – and how businesses interact with their clients.
            Enterprise Mobility Management (EMM) is a growing area of focus as
            the modern workforce becomes increasingly dependent on personal and
            enterprise mobile devices. EMM software helps organizations enable
            their employees to use mobile devices and applications securely and
            synergistically. Having a well-defined EMM strategy is critical for
            today’s businesses to grow in an increasingly tech-driven world.
          </p>

          <p>
            At<b>Shree Partners</b> , our expertise in the multi-platform mobile
            ecosystem makes us the perfect partner for clients looking to
            seamlessly transition from legacy systems to powerful new platforms.
            We provide industry-leading consulting solutions that help our
            clients run more productive, efficient operations
          </p>
        </div>
      </section>

     
     <section className="mobility-usecase">
  <div className="wrap">

    <h2>Enterprise Mobility Management Use Cases</h2>

    <div className="mobility-content">

      <div className="mobility-image">
        <img src={mobilityImg} alt="Enterprise Mobility" />
      </div>

      <div className="mobility-text">

        <p>Common mobility solutions include:</p>

        <ul>
          <li>Work order management for field executives</li>
          <li>Materials requisition</li>
          <li>Employee contact and collaboration through apps that integrate across the enterprise</li>
          <li>CRM for better relationship management</li>
          <li>Sales order updates for real-time supply chain management</li>
          <li>Device-agnostic content shared across devices (BYOD and CYOD)</li>
        </ul>

      </div>

    </div>
  </div>
</section>
     

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Better access and control of enterprise information</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>More flexible workplaces with secure applications</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Enhanced security and risk management</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improved remote worker connectivity and productivity</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Better collaboration over secure networks</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Transparent work processes</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Real-time updates and uniform information access</h3>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Mobility;
