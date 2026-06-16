import "./TestAutomation.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../assets/application-services.jpg";
import automationDiagram from "../assets/Test-Automation-diagram.png";
import Navbar from "../components/Navbar";
function TestAutomation() {
  return (
    <>
       <Navbar />
      {/* HERO SECTION */}

      <section className="test-hero">
        <div className="hero-content">
          <h4>APPLICATION SERVICES AND AUTOMATION</h4>
          <h1>Test Automation</h1>
        </div>
        
      </section>

      {/* TESTING FOR SUCCESS */}

      <section className="test-intro">
        <div className="container">
          <h2>Testing for Success</h2>

          <p>
            When it comes to innovation, success always has the potential to
            triumph over failure. Yet in the digital ecosystem, avoidable
            failure is not only detrimental and costly to an organization; it
            can jeopardize future success.
          </p>

          <p>
            Therefore, proper testing of applications in different scenarios is
            vitally important to any business. Today’s mission-critical
            applications require comprehensive testing across the design,
            development, and deployment phases.
          </p>

          <p>
            At Shree Partners, our test automation frameworks handle repetitive
            testing requirements with advanced automated technologies. Our
            processes reduce errors and save time while offering cost-effective
            solutions throughout the testing workflow.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="test-overview">
        <div className="container">

          <h2>Test Automation Overview</h2>

          <div className="overview-grid">

            <div>
              <p>
                At Shree Partners, our frameworks handle three key components
                of test automation: assessment, implementation and
                post-implementation.
              </p>

              <p>
                Our plug-and-play solutions enable clients to quickly handle
                testing of repetitive requirements. Intelligent automation
                eliminates manual intervention and delivers faster deployment.
              </p>
            </div>

            <ul className="overview-list">
              <li>Faster deployment using customized solutions</li>
              <li>Testing of highly complex application components</li>
              <li>Seamless integration with upstream requirements</li>
              <li>Full automation; no manual intervention required</li>
              <li>Exhaustive scenario testing and cross-testing</li>
              <li>Post-implementation support with upgrades</li>
              <li>On-demand upgrades to different environments</li>
            </ul>

          </div>

        </div>
      </section>
      {/* IMAGE BANNER */}


{/* KEY BENEFITS */}
<section className="benefits-section">
  <h2 className="benefits-title">Key Benefits</h2>

  <div className="benefits-grid">

    <div className="benefit-item">
      <div className="benefit-icon">✓</div>
      <h3>Data-driven testing</h3>
      <p>Handles disparate data sets and multiple variables in complex workflows</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">✓</div>
      <h3>Consistency and accuracy</h3>
      <p>Across subsets through comprehensive testing</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">✓</div>
      <h3>Load and performance testing</h3>
      <p>In concurrent user sessions</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">✓</div>
      <h3>Parallel testing</h3>
      <p>To support agile methodologies</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">✓</div>
      <h3>Faster regression testing</h3>
      <p>To roll out upgrades</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">✓</div>
      <h3>Reduced testing time</h3>
      <p>60% compared to manual testing</p>
    </div>

  </div>
</section>

{/* AUTOMATION TESTING SERVICES DIAGRAM */}
<section className="diagram-section">
  <div className="wrap">
    <h2>Automation Testing Framework</h2>

    <img
      src={automationDiagram}
      alt="Automation Testing Diagram"
      className="diagram-image"
    />
  </div>
</section>
<section className="tools-section">
  <div className="wrap">
    <h2 className="tools-heading">
      Testing Tools Exposure
    </h2>

    <div className="tools-grid">

      <div>
        <p>Apache JMeter</p>
        <p>Eclipse</p>
        <p>JAWS for Windows</p>
        <p>JU Unit</p>
        <p>QTP</p>
        <p>Visual Studio</p>
      </div>

      <div>
        <p>Apache Log4J</p>
        <p>GitHub</p>
        <p>Jenkins</p>
        <p>Maven</p>
        <p>SE</p>
        <p>Test NG</p>
      </div>

      <div>
        <p>Bugzilla</p>
        <p>HP Application Lifecycle Management</p>
        <p>JIRA</p>
        <p>Microsoft Visual Studio</p>
        <p>Soap UI</p>
        <p>TFS</p>
      </div>

    </div>
  </div>
</section>
      {/* BENEFITS */}

      
    </>
  );
}

export default TestAutomation;