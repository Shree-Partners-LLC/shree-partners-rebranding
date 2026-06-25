import "../styles/industries.css";
import { Link } from "react-router-dom";
function Industries() {
  return (
    <section className="industries">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Where we've delivered</span>

          <h2 className="industry-title">
            Deep roots in complex, regulated industries.
          </h2>
        </div>
        <div className="ind-row">
          <Link to="/travel-hospitality" className="chip">
            Travel & Hospitality
          </Link>
          <Link to="/insurance-claims" className="chip">
            Insurance & Claims
          </Link>
          <Link to="/logistics" className="chip">
            Logistics & Cold Chain
          </Link>

          <Link to="/banking" className="chip">
            Banking & Financial Services
          </Link>
          <Link to="/healthcare" className="chip">
            Healthcare
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Industries;
