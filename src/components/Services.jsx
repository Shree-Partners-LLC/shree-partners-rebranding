import "../styles/services.css";
import { Link } from "react-router-dom";
function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">What we do</span>
          <h2>Four practices, one goal: ship faster without breaking what works. </h2>
          <p>Every engagement is led by senior engineers who have run enterprise systems — not slideware consultants.</p>
        </div>
        <div className="svc-grid">
          <Link to="/ai" className="svc-link">
          <div className="svc">
            <span className="svc-tag">Accelerate</span>
            <h3>AI Development Acceleration</h3>
            <p>We embed AI-assisted workflows into your engineering organization and prove the productivity gain on your own backlog.</p>
            <ul>
              <li>Tooling rollout: coding agents, review automation, CI integration</li>
              <li>Team enablement with measurable before/after velocity</li>
              <li>Guardrails: security, IP, and code-quality policy</li>
            </ul>
          </div>
          </Link>
          <Link to="/legacy" className="svc-link">
          <div className="svc">
            <span className="svc-tag">Modernize</span>
            <h3>Legacy Modernization</h3>
            <p>AI-driven analysis of aging codebases, then disciplined migration — incremental, tested, and reversible at every step.</p>
            <ul>
              <li>Automated code comprehension and documentation recovery</li>
              <li>Re-platforming: monolith to services, on-prem to cloud</li>
              <li>Test generation so migrations land safely</li>
            </ul>
          </div>
          </Link>
          <Link to="/agents" className="svc-link">
          <div className="svc">
            <span className="svc-tag">Automate</span>
            <h3>Agents & MCP Development</h3>
            <p>Production agents built on the Model Context Protocol, connected to the systems your business actually runs on.</p>
            <ul>
              <li>Custom MCP servers for ERPs, claims systems, travel platforms</li>
              <li>Agent workflows with human-in-the-loop approval</li>
              <li>Evaluation, monitoring, and cost control</li>
            </ul>
          </div>
          </Link>
          <Link to="/audits" className="svc-link">
          <div className="svc">
            <span className="svc-tag">Assess</span>
            <h3>Software Engineering Audits</h3>
            <p>An independent, evidence-based read on your codebase,architecture, and team practices.</p>
            <ul>
              <li>Code health, security posture,and delivery-pipeline review</li>
              <li>AI-readiness assessment</li>
              <li>Board-ready findings</li>
            </ul>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Services;