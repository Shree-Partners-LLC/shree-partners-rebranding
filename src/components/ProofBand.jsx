import "../styles/proofband.css";

function ProofBand() {
  return (
    <section className="band">

      <div className="wrap">

        <span className="eyebrow">
          Why Shree
        </span>

        <h2>
          New practice. Long track record.
        </h2>

        <p className="sub">
          We've designed, built, and operated enterprise systems since
          2005 — across travel & hospitality, insurance, logistics,
          and financial services. The AI practice stands on that
          foundation, not in place of it.
        </p>

        <div className="band-grid">

          <div className="band-cell">
            <strong>2005</strong>

            <span>
              Founded in New Jersey; delivering for global enterprises
              ever since
            </span>
          </div>

          <div className="band-cell">
            <strong>2</strong>

            <span>
              Delivery centers — US onshore and ISO 27001-certified
              India operations
            </span>
          </div>

          <div className="band-cell">
            <strong>4</strong>

            <span>
              Industries served deeply: travel, insurance,
              logistics, BFSI
            </span>
          </div>

          <div className="band-cell">
            <strong>100%</strong>

            <span>
              Engagements led by senior engineers with
              production accountability
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProofBand;