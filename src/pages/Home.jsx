import { Link } from "react-router-dom";
import "./Home.css";
import heroImage from "../assets/home-hero-img.jpeg";
import travelImg from "../assets/travel-and-hospitality.jpg";
import healthcareImg from "../assets/healthcare.jpg";
import financeImg from "../assets/insurance.avif";
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot"></span>

              <span className="badge-text">
                AI-First Company · Agentic Automation
              </span>
            </div>

            <h1>
              Your enterprise,
              <br />
              re-engineered around AI.
            </h1>

            <p>
              Shree Partners builds agentic AI, machine learning, and generative
              systems into the core of how you operate — turning AI-powered
              transformation into measurable, durable advantage.
            </p>

            <div className="hero-buttons">
              <Link to="/Contact" className="primary-btn">
                Request a Demo
              </Link>

              <Link to="/About" className="secondary-btn">
                See Our Work
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-box">
            <h2>2005</h2>

            <span>Delivering since</span>
          </div>

          <div className="stat-box">
            <h2>200+</h2>

            <span>Specialists</span>
          </div>

          <div className="stat-box">
            <h2>US & India</h2>

            <span>Global delivery</span>
          </div>

          <div className="stat-box last">
            <h2>3</h2>

            <span>Core industries</span>
          </div>
        </div>
      </section>
      <section className="services" id="capabilities">
        <div className="services-container">
          <span className="section-title">Capabilities</span>

          <h2>One partner across the full AI stack</h2>

          <div className="services-grid">
            <div className="service-card featured">
              <div className="featured-icon">
                <div className="circle"></div>
              </div>

              <div>
                <span className="featured-tag">Flagship</span>

                <h3>Generative AI & Agentic Automation</h3>

                <p>
                  Autonomous agents and copilots that run multi-step workflows
                  end to end — governed, audited and integrated with your stack.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="icon square"></div>

              <h3>AI & Machine Learning</h3>

              <p>
                Forecasting, decisioning and optimization models —
                production-ready with full MLOps.
              </p>
            </div>

            <div className="service-card">
              <div className="icon diamond"></div>

              <h3>Cloud & Infrastructure</h3>

              <p>
                Secure, scalable platforms — the foundation your AI workloads
                depend on.
              </p>
            </div>

            <div className="service-card service-industry-card">
              <div>
                 <div className="icon diamond"></div>
                <h3>Industry AI Solutions</h3>

                <p>
                  Domain-trained accelerators for travel, healthcare and
                  financial services that ship value in weeks, not quarters.
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </section>
      <section className="agentic">
        <div className="agentic-container">
          <div className="agentic-heading">
            <span>How agentic AI works</span>

            <h2>From task to autonomous outcome</h2>
          </div>

          <div className="agentic-grid">
            <div className="agent-card">
              <span className="step">STEP 01</span>

              <h3>Perceive & Plan</h3>

              <p>
                Agents read context from your systems and break goals into safe,
                ordered steps.
              </p>
            </div>

            <div className="agent-card">
              <span className="step">STEP 02</span>

              <h3>Act with Tools</h3>

              <p>
                They call your APIs and applications to execute work within
                strict permissions.
              </p>
            </div>

            <div className="agent-card">
              <span className="step">STEP 03</span>

              <h3>Verify & Escalate</h3>

              <p>
                Outcomes are checked and audited while escalating to humans
                whenever judgment is needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-band">
        <div className="feature-container">
          <div className="feature-left">
            <span className="feature-label">Why Shree Partners</span>

            <h2>
              Two decades of delivery,
              <br />
              now AI-first.
            </h2>

            <p>
              We don't run pilots that never ship. We embed AI into production
              operations with the governance, security and accountability that
              CIOs, CSOs and CEOs require.
            </p>
          </div>

          <div className="feature-right">
            <div className="feature-item">
              <span className="dot"></span>

              <div>
                <h3>Outcome-led, not pilot-led</h3>

                <p>Every engagement targets a measurable business result.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="dot"></span>

              <div>
                <h3>Governed & Secure by Design</h3>

                <p>
                  Built for audit, compliance and enterprise risk from day one.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span className="dot"></span>

              <div>
                <h3>Global Delivery, Your Timezone</h3>

                <p>
                  Onshore strategy with scaled engineering across the US &
                  India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="industries" id="industries">
        <div className="industries-container">
          <span className="section-title">Industries</span>

          <h2>Deep expertise where the stakes are highest</h2>

          <div className="industry-grid">
            <div className="industry-card">
              <img src={travelImg} alt="Travel" />

              <div className="industry-content">
                <h3>Travel & Hospitality</h3>

                <p>
                  Dynamic pricing, AI concierge and operations automation for a
                  24/7 industry.
                </p>
              </div>
            </div>

            <div className="industry-card">
              <img src={healthcareImg} alt="Healthcare" />

              <div className="industry-content">
                <h3>Healthcare</h3>

                <p>
                  Clinical document intelligence and compliant automation that
                  protects patient data.
                </p>
              </div>
            </div>

            <div className="industry-card">
              <img src={financeImg} alt="Finance" />

              <div className="industry-content">
                <h3>Banking & Financial Services</h3>

                <p>
                  Risk, fraud and back-office agents built for audit, security
                  and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="cta-container">
          <h2>
            Let's make AI your
            <br />
            operating advantage.
          </h2>

          <p>
            Book a discovery session and we'll map your first high-value
            automation with a roadmap your board will back.
          </p>

          <div className="cta-buttons">
            <Link to="/Contact" className="primary-btn">
              Request a Demo
            </Link>

            <Link to="/Contact" className="secondary-btn">
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
