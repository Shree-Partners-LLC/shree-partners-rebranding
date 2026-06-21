import "./mobility.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../assets/application-services.jpg";
import DigitalDiagram from "../assets/DigiMarketing_capabilities.png";
import digitalImg from "../assets/mobility.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import digital_cms_Diagram from "../assets/CMS_diagram.png";
function DigitalMarketing() {
  return (
    <>
      <Navbar />

      <section className="test-hero">
        <div className="hero-content">
          <h4>APPLICATION SERVICES AND AUTOMATION</h4>
          <h1>Digital Marketing and Collaboration</h1>
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
          <h2>Optimizing Digital for Business Success</h2>

          <p>
            Disruption across the digital ecosystem has created unlimited
            opportunities for businesses and organizations that are flexible,
            nimble technology adopters. What’s more, digital marketing is
            essential for businesses that want to succeed in today’s digital
            world. According to a Responsify survey, 58 percent of marketers
            admit to failing to achieve their marketing goals. While adoption of
            digital marketing is important, successful businesses understand
            that the true differentiator is the combination of adoption plus
            implementation.
          </p>

          <p>
            Shree Partners offers effective, integrated tools and solutions that
            help businesses succeed in the digital marketplace. Our solutions
            integrate a variety of marketing tools such as search engine
            optimization (SEO), social media outreach, email marketing, forums,
            pay-per-click (PPC) advertising, and a host of other options. When
            combined effectively, these solutions help our clients boost market
            share, enhance competitiveness, and build revenues.
          </p>
        </div>
      </section>

      <section className="mobility-usecase">
        <div className="wrap">
          <h2>Branding for Success</h2>

          <div className="mobility-content">
            <div className="mobility-image">
              <img src={digitalImg} alt="Enterprise Mobility" />
            </div>

            <div className="mobility-text">
              <p>
                At Shree Partners, our customized digital marketing programs
                help clients improve their online reach through vehicles like
                optimized web pages, digital advertising, and other marketing
                tools. Each solution is tailored to address a client’s unique
                needs and business goals. Our skilled professionals understand
                the power of a cohesive, aligned digital marketing program, and
                work closely with our clients to create unique programs that
                deliver strong results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Broad, cost-effective programs that reach more prospects for less</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Greater conversion of high-quality leads in the pipeline</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Higher ROI; better cost control</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Increased competitive positioning</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improved brand image and reputation</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Competitive insights for exact targeting</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>360-degree feedback to quickly pivot, flex or change</h3>
          </div>
        </div>
      </section>
       <section className="diagram-section">
              <div className="container">
               
                <img
                  src={DigitalDiagram}
                  alt="Automation Testing Diagram"
                  className="diagram-image"
                />
              </div>
            </section>
             <section className="diagram-section">
                    <div className="container">
                      <h2>CMS Service Capability</h2>
            
                      <img
                        src={digital_cms_Diagram}
                        alt="Automation Testing Diagram"
                        className="diagram-image"
                      />
                    </div>
                  </section>
                  <Footer/>
    </>
  );
}

export default DigitalMarketing;
