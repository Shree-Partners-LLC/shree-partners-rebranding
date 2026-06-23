import "./mobility.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/images4.jpeg";
import networkDiagram from "../../assets/Network-Operation-services.jpg";

function CloudManagement() {
  return (
    <>
     
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Enterprise Operations Transformation</h4>

            <h1>Cloud Management</h1>
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
          <h2>The Cloud Dimension</h2>

          <p>
            Transitioning to the cloud brings unparalleled benefits in
            scalability and cost savings. The popularity of the cloud has
            reached impressive heights; the IDG Cloud Computing Study reports
            that 77 percent of organizations have at least one application in
            the cloud. Recently, private and public cloud computing accounted
            for 70 percent of organizations’ workloads, underscoring the cloud’s
            pivotal role in computing.
          </p>

          <p>
            Choosing the ideal virtualization technology involves selecting from
            SPI models (Software as a Service, Platform as a Service, and
            Infrastructure as a Service) and deployment models. At Shree
            Partners, our end-to-end service offerings remove the complexity
            around cloud deployment, management and maintenance. Our 99.9
            percent Service Level Agreement (SLA) record – plus proven
            excellence and value – have established us as an industry leader in
            providing customized cloud solutions.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2>Cloud Solutions Overview</h2>

          <div>
            <p>
              Our enterprise-grade service is an integrated, end-to-end, fully
              managed solution that comes ready for deployment. Our expertise
              spans your entire cloud journey – from initial assessment to
              dashboards and reporting – and clients pay only for services used.
              Our team works with cloud service providers to integrate multiple
              components: storage, security, orchestration, networking and
              computing.
            </p>
            <p>
              At the heart of our solution is the <b>Shree Partners</b> promise:
              To deliver customized services that offer the best value to every
              client we serve. Flexibility and scalability help reduce capital
              and operating expenses throughout the migration of
              mission-critical workloads. Integration is flawlessly executed,
              and dashboards offer complete visibility and control throughout
              the process.
            </p>
          </div>
        </div>
      </section>
      <section className="mobility-usecase">
        <div className="wrap">
          <div className="mobility-content">
            <div className="mobility-text">
              <h2>Getting Started on the Cloud</h2>
              <ul>
                <p>Key steps to implement a cloud solution include:</p>
                <li>
                  <b>Assessment </b>– Gather requirements; assess readiness and
                  adoption
                </li>
                <li>
                  <b>Planning</b> – Create roadmap from concept to
                  implementation
                </li>
                <li>
                  <b>Cloud Deployment and Migration</b> – Assess end-to-end
                  requirements
                </li>
                <li>
                  <b>Performance Optimization</b> – Identify and leverage
                  deployment benefits
                </li>
                <li>
                  <b>Hybrid Cloud </b>– Evaluate deployment models and workload
                  migrations
                </li>
                <li>
                  <b>Monitor and Manage</b>– Identify critical services to
                  ensure flawless results
                </li>
                <li>
                  <b>Virtualization</b> – Ensure key benchmarks are set and met
                </li>
                <li>
                  <b>Development</b>– Develop applications
                </li>
                <li>
                  <b>Lifecycle Security and Regulatory Compliance </b>–
                  Eliminate risk and downtime
                </li>
                <li>
                  <b>Dashboards and Reporting</b> – Identify key metrics and
                  KPIs
                </li>
              </ul>
            </div>

            <div className="mobility-text">
              <h2>Cloud Solutions – Use Cases</h2>
              <ul>
                <p>
                  The most common cloud solutions include on-demand software and
                  tools for routine processes such as CRM, marketing automation
                  tools, and others.
                </p>
                <li>
                  <b>IaaS </b>– Reduces cost of establishing and maintaining a
                  data center
                </li>
                <li>
                  <b>DaaS</b>– With digital transformation, clients typically
                  experience a shift in workplace culture with BYOD (Bring Your
                  Own Device). The cloud helps virtualized desktops unify
                  content across devices
                </li>
                <li>
                  <b>Backup</b>– Data is the key ingredient in cloud computing;
                  organizations consistently find the cloud to be invaluable for
                  data backup
                </li>
                <li>
                  <b>Aggregator Services</b>– The cloud fosters success of
                  e-commerce and aggregator services
                </li>
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
            <h3>Unparalleled flexibility</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Swift data recovery during operational incidents</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Automatic software updates eliminate time-consuming upgrades</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>No capital expenses for improved cash flow</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Greater collaboration improves stakeholder productivity</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>“Anywhere access” meets flexible workplace demands</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Enhanced document control reduces complexity</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improved security</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Scalability enhances competitiveness</h3>
          </div><div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Environmentally-friendly; reduces carbon footprint</h3>
          </div>
        </div>
      </section>
                
    </>
  );
}

export default CloudManagement;
