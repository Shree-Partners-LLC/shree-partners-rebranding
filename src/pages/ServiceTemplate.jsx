function ServiceTemplate({
  title,
  description,
  services,
  benefits,
}) {
  return (
    <>
      <section className="service-hero">
        <div className="wrap">
          <span className="eyebrow">SERVICES</span>

          <h1>{title}</h1>

          <p>{description}</p>
        </div>
      </section>

      <section className="service-section">
        <div className="wrap">

          <h2>Key Capabilities</h2>

          <div className="cards">
            {services.map((item, index) => (
              <div className="card" key={index}>
                {item}
              </div>
            ))}
          </div>

          <h2>Business Benefits</h2>

          <ul>
            {benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>
      </section>
    </>
  );
}

export default ServiceTemplate;