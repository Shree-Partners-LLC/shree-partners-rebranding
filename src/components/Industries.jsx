import "./Industries.css";

import travel from "../assets/travel-and-hospitality.jpg";
import health from "../assets/healthcare.jpg";
import finance from "../assets/insurance.avif";

function Industries() {
  return (
    <section className="industries" id="industries">

      <div className="industries-container">

        <span className="industry-tag">
          Industries
        </span>

        <h2>
          Deep expertise where the stakes are highest
        </h2>

        <div className="industry-grid">

          <div className="industry-card">

            <img src={travel} alt="" />

            <div className="industry-content">

              <h3>Travel & Hospitality</h3>

              <p>
                Dynamic pricing, AI concierge and operations automation for a
                24/7 industry.
              </p>

            </div>

          </div>

          <div className="industry-card">

            <img src={health} alt="" />

            <div className="industry-content">

              <h3>Healthcare</h3>

              <p>
                Clinical document intelligence and compliant automation that
                protects patient data.
              </p>

            </div>

          </div>

          <div className="industry-card">

            <img src={finance} alt="" />

            <div className="industry-content">

              <h3>Banking & Financial Services</h3>

              <p>
                Risk, fraud and back-office agents built for audit,
                security and scale.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Industries;