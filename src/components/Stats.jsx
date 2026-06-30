import "./Stats.css";

function Stats() {
  return (
    <section className="stats">

      <div className="stats-container">

        <div className="stat-card">
          <h2>2005</h2>
          <p>Delivering since</p>
        </div>

        <div className="stat-card">
          <h2>200+</h2>
          <p>Specialists</p>
        </div>

        <div className="stat-card">
          <h2>US & India</h2>
          <p>Global delivery</p>
        </div>

        <div className="stat-card last">
          <h2>3</h2>
          <p>Core industries</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;