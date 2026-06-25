import "../styles/about.css";
function About() {
  return (
    <section id="about" className="about-section">
      <div className="wrap about-grid">
        <div>
          <span className="eyebrow">About Shree</span>
          <h2>Built for the era when software writes software.</h2>
          <p>Shree Partners is a US technology consultancy headquartered in New Jersey, with an ISO 27001-certified delivery subsidiary, Shree Infosoft, in India.</p>
          <p>For two decades we've built and operated mission-critical systems for global enterprises in travel, insurance and logistics.</p>
          <p>Today, our focus is helping organizations adopt AI where it matters: inside engineering organizations and inside the systems that run the business.</p>
        </div>
        <div>
          <div className="fact">
            <strong>US + India delivery</strong>
            <span>Onshore leadership and architecture; offshore engineering depth and around-the-clock coverage.</span>
          </div>
          <div className="fact">
            <strong>ISO 27001:2013 certified</strong>
            <span>Security-managed delivery operations through Shree Infosoft Private Limited.</span>
          </div>
          <div className="fact">
            <strong>Senior-led, by design</strong>
            <span>Small teams, principal-level oversight, and accountability for outcomes.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;