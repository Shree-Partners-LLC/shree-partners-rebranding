import "./FeatureBand.css";

function FeatureBand() {
  return (
    <section className="feature-band">

      <div className="feature-container">

        <div className="feature-left">

          <span>
            Why Shree Partners
          </span>

          <h2>
            Two decades of delivery,
            now AI-first.
          </h2>

          <p>
            We don't run pilots that never ship. We embed AI into
            production operations with the governance, security
            and accountability that CIOs, CSOs and CEOs require.
          </p>

        </div>

        <div className="feature-right">

          <div className="feature-item">

            <div className="bullet"></div>

            <div>

              <h3>
                Outcome-led, not pilot-led
              </h3>

              <p>
                Every engagement targets a measurable business result.
              </p>

            </div>

          </div>

          <div className="feature-item">

            <div className="bullet"></div>

            <div>

              <h3>
                Governed & Secure by design
              </h3>

              <p>
                Built for audit, compliance and enterprise risk
                from day one.
              </p>

            </div>

          </div>

          <div className="feature-item">

            <div className="bullet"></div>

            <div>

              <h3>
                Global delivery, your timezone
              </h3>

              <p>
                Onshore strategy with scaled engineering
                across the US & India.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeatureBand;