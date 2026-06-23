import "./mobility.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/images4.jpeg";
import networkDiagram from "../../assets/Network-Operation-services.jpg";


function NetworkOperationsCenter() {
  return (
    <>
      
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Enterprise Operations Transformation</h4>

            <h1>Network Operations Center</h1>
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
          <h2>Running a Seamless Organization</h2>

          <p>
            Infrastructure management services are essential for organizations
            that depend on remote monitoring to manage mission-critical
            operations. Workflow management and critical event detection rely on
            responsive network operations centers (NOC) for real-time, 24/7
            monitoring and troubleshooting.
          </p>

          <p>
            Shree Partners offers industry-leading NOC and infrastructure
            management services to support our clients’ high-level monitoring
            and management requirements.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2>NOC Overview</h2>

          <div>
            <p>
              At <b>Shree Partners</b>, our dedicated NOC solutions constantly
              monitor threshold levels using tools that trigger alerts to
              dedicated dashboards. Remote monitoring helps us map incidents of
              every conceivable nature: CPU, RAM, routers, uninterruptible power
              supplies (UPS), temperatures in remote server locations, battery
              performance – and much more.
            </p>
          </div>
        </div>
      </section>
      <section className="mobility-usecase">
        <div className="wrap">
          <div className="mobility-content">
            <div className="mobility-text">
              <h2>Network Operations Center Services</h2>

              <ul>
                <li>
                  Comprehensive remote system monitoring, management and
                  remediation
                </li>
                <li>
                  Network discovery, performance reporting, and troubleshooting
                </li>
                <li>Network provisioning</li>
                <li>Router performance reporting and ticket management</li>
                <li>
                  Patch management, system administration, backup and storage
                </li>
                <li>End user support</li>
                <li>White-listing services and threat analysis</li>
                <li>Application software installations and updates</li>
              </ul>
            </div>

            <div className="mobility-text">
              <h2>KPIs to Track Performance and Business Outcomes </h2>
              <ul>
                <li>First-time fix percentage </li>
                <li>Incident resolution, time analysis </li>
                <li>Critical alerts resolution</li>
                <li>Quick incident resolutions</li>
                <li>Server return to service</li>
                <li>Widgets: device, alert, location, and custom graph</li>
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
            <h3>Widgets: device, alert, location, and custom graph</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Time and labor savings</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improve security</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Reduce downtime</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Immediate handling of incidents</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Free up IT resources for other tasks</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Protection from network attacks</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>24/7 support and network monitoring</h3>
          </div>
        </div>
      </section>

      <section className="diagram-section">
        <div className="container">
          <h2>Automation Testing Framework</h2>

          <img
            src={networkDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
    
    </>
  );
}

export default NetworkOperationsCenter;
