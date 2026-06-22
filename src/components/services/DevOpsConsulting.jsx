import "./mobility.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/images4.jpeg";
import DevOpsDiagram from "../../assets/DevOps.png";
import Footer from "../Footer";
import KPIsImg from "../../assets/MetricsKPIs.jpg";
import Navbar from "../Navbar";
function DevOpsConsulting() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Enterprise Operations Transformation</h4>

            <h1>DevOps Consulting <br/> and Implementation</h1>
          </div>
        </div>

        <div
          className="hero-image"
          style={{
            backgroundImage: `
        linear-gradient(
          rgba(11,20,53,0.55),
          rgba(11,20,53,0.55)
        ),
        url(${serviceImg})
      `,
          }}
        ></div>
      </section>

      <section className="test-intro">
        <div className="container">
          <h2>DevOps is Foundational to Project Success</h2>

          <p>
            Development Operations (DevOps) is a set of software development
            practices that combines software development (Dev) and information
            technology operations (Ops) to reduce the systems development
            lifecycle. This methodology delivers frequent and concurrent
            features, fixes and updates that closely align with business
            objectives.
          </p>

          <p>
            According to a Statista study, approximately 85 percent of
            organizations are at various stages of considering, adopting or
            partially adopting a DevOps strategy. A 2019 Gartner study reports
            that five key factors impact DevOps success: delivering customer
            value, managing organizational change, collaboration, incremental
            scaling and managing expectations. At Shree Partners, sound DevOps
            practices ensure that we deliver solutions that are flexible, agile,
            on time and on budget. These benefits help our customers maximize
            their business objectives while driving down development costs.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2>Strong DevOps Process</h2>

          <div>
            <p>
              Our project development process is nimble and responsive – and
              designed to address changing client expectations. Our process
              involves tearing down silos and eliminating unnecessary steps to
              ensure seamless, uninterrupted project implementation.
            </p>
            <p>
              A client’s biggest “ask” in project development is the ability
              foresee potential problems that could arise during the project
              lifecycle. Through a process of shared accountability across
              client and Shree teams, DevOps enables us to develop and deploy
              solutions that address key issues in advance – as well as
              throughout the project. Our DevOps approach works hand-in-hand
              with ITIL, ITSM, Agile and Six Sigma to ensure smooth
              implementation.
            </p>
          </div>
        </div>
      </section>
 <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Cross-functional transparency across teams</h3>
      
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Streamlined processes and communication</h3>
           
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Automated, end-to-end approach</h3>
        
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Control and visibility throughout project lifecycle</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Quick turnaround leading to cost reduction</h3>
          
          </div>

 
        </div>
      </section>
      <section className="mobility-usecase">
        <div className="wrap">
      
          <h2>Metrics and KPIs to Track Success</h2>
      
          <div className="mobility-content">
      
            <div className="mobility-image">
              <img src={KPIsImg} alt="Enterprise Mobility" />
            </div>
      
            <div className="mobility-text">
      
      
              <ul>
              <li>Effective project staffing ratios</li>
              <li>Fast delivery, commitment and key milestone tracking</li>
              <li>Development and Operations integration for smooth change management and collaboration</li>
              <li>Faster development, lower costs, metrics aligned with results</li>          
              </ul>
      
            </div>
      
          </div>
        </div>
      </section>

      <section className="diagram-section">
        <div className="container">
          <h2>DevOps: Services Offerings</h2>

          <img
            src={DevOpsDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
     <Footer/>
    </>
  );
}

export default DevOpsConsulting;
