import "./mobility.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../assets/images.jpeg";
import datavalueDiagram from "../assets/Data-Valuediagram.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function TestAutomation() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Data Management and Analytics</h4>

            <h1>Business Intelligence and Analytics</h1>
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
          <h2>Doing Business Better</h2>

          <p>
            According to a Business Intelligence Survey report, nearly 49
            percent of respondents say that business intelligence (BI) helps
            their organizations make better decisions. Data-powered decisions
            stand a better chance of succeeding, and business intelligence gives
            organizations the power to make decisions more proactively. Reports,
            dashboards and visualizations that deliver insights require the
            power of various tools, applications and methodologies to collect,
            process, analyze and display the data.
          </p>

          <p>
            At Shree Partners, our solutions deliver advanced analytical
            capabilities that help clients make better tactical and strategic
            decisions. Critical to any business is the ability to leverage key
            tools to access, analyze and process data sets – and then transform
            those insights into reports, dashboards, graphs or visualizations.
            We help clients to turn complex data sets into vital business
            intelligence using our next-generation business intelligence and
            analytics solutions. Regardless of the architecture, type of
            application or platform, our solutions deliver timely, actionable
            insights that require no further interpretation; this feature
            enables users to make quick, intelligent data-powered decisions.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2>Business Intelligence Overview</h2>

          <div>
            <p>
              By leveraging business intelligence, companies can quickly analyze
              evolving scenarios, enabling them to address both opportunities
              and threats. Our solutions give clients the advantage of
              self-service analysis to act quickly on key insights. Clients gain
              greater transparency over their operations, helping them quickly
              and easily assess complex data sets. By tracking various
              departmental metrics, clients can monitor performance and make
              scale-up / down decisions. Our solutions also help clients
              collect, analyze, track and compare data in different combinations
              to refine their strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Accurate reporting, analysis and planning</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Data-backed decisions</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Increased operational efficiency</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Enhanced competitive position</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Information accuracy and speed</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Classic and Modern BI options</h3>
          </div>
        </div>
      </section>
      <section className="mobility-usecase">
        <div className="wrap">
          <div className="mobility-content">
            <div className="mobility-text">
              <h2>Business Intelligence Use Cases</h2>
              <p>Common use cases include:</p>
              <ul>
                <li>
                  <b>Travel and Hospitality</b> – Analyze client’s online data
                  to understand performance, pricing and preferences to tweak
                  service offerings
                </li>
                <li>
                  <b>Healthcare</b> – Aggregate medical or financial data to
                  draw insights that help deliver better healthcare or manage
                  financial health
                </li>
                <li>
                  <b>Retail</b> – Optimize pricing per market trends and
                  customer preferences; maximize profits by offering better
                  customer experiences and value
                </li>
                <li>
                  <b>Banking and Finance</b> – Analyze patterns and customer
                  behavior;uncover fraudulent transactions and proactively
                  manage risk
                </li>
              </ul>
            </div>

            <div className="mobility-text">
              <h2>Tracking Metrics</h2>
              <p>
                These metrics help companies track performance and business
                outcomes using business intelligence tools and solutions:
              </p>
              <ul>
                <li>
                  <b>Enhanced Financial Performance </b> – When implemented
                  effectively, both Classic and Modern BI solutions help
                  organizations improve financial performance
                </li>
                <li>
                  <b>Improved Productivity </b> – BI tools reduce the need to
                  collect information or search for data points. Strong BI tools
                  enhance productivity by freeing employees to spend less time
                  sourcing information
                </li>
                <li>
                  <b>Better Margins</b> – The right BI tools help improve
                  margins by leveraging productivity and efficiency
                </li>
                <li>
                  <b>Employee Pulse</b> – BI tools help democratize information
                  across organizations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="diagram-section">
        <div className="container">
          <h2>Automation Testing Framework</h2>

          <img
            src={datavalueDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default TestAutomation;
