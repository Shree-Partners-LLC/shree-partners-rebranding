import "./AgenticFlow.css";

function AgenticFlow() {
  return (
    <section className="agentic">

      <div className="agentic-container">

        <div className="agentic-heading">

          <span>How agentic AI works</span>

          <h2>
            From task to autonomous outcome
          </h2>

        </div>

        <div className="agentic-grid">

          <div className="agentic-card">

            <span className="step">
              STEP 01
            </span>

            <h3>
              Perceive & Plan
            </h3>

            <p>
              Agents read context from your systems and break goals into
              safe, ordered steps.
            </p>

          </div>

          <div className="agentic-card">

            <span className="step">
              STEP 02
            </span>

            <h3>
              Act with tools
            </h3>

            <p>
              They call your APIs and applications to execute work —
              within strict permissions.
            </p>

          </div>

          <div className="agentic-card">

            <span className="step">
              STEP 03
            </span>

            <h3>
              Verify & Escalate
            </h3>

            <p>
              Outcomes are checked and audited, escalating to people
              whenever judgment is required.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AgenticFlow;