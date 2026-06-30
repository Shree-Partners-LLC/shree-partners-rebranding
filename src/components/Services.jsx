import "./Services.css";

function Services() {
  return (
    <section className="services" id="capabilities">

      <div className="services-container">

        <span className="section-tag">
          Capabilities
        </span>

        <h2>
          One partner across the full AI stack
        </h2>

        <div className="services-grid">

          <div className="service-card featured">

            <div className="service-icon circle"></div>

            <div>
              <span className="small-tag">
                Flagship
              </span>

              <h3>
                Generative AI & Agentic Automation
              </h3>

              <p>
                Autonomous agents and copilots that run multi-step workflows
                end to end — governed, audited and integrated with your stack.
              </p>
            </div>

          </div>

          <div className="service-card">

            <div className="service-icon square"></div>

            <div>

              <h3>AI & Machine Learning</h3>

              <p>
                Forecasting, decisioning and optimization models with
                production-ready MLOps.
              </p>

            </div>

          </div>

          <div className="service-card">

            <div className="service-icon diamond"></div>

            <div>

              <h3>Cloud & Infrastructure</h3>

              <p>
                Secure, scalable cloud platforms that power enterprise AI.
              </p>

            </div>

          </div>

          <div className="service-card industry">

            <div>

              <h3>Industry AI Solutions</h3>

              <p>
                Domain-trained accelerators for travel, healthcare and
                financial services that deliver value in weeks.
              </p>

            </div>

            <div className="mini-boxes">

              <div></div>

              <div></div>

              <div></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;