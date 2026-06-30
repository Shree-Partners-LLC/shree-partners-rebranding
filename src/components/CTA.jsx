import "../styles/cta.css";
function CTA() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>Bring us one system.We'll show you what AI can do with it.</h2>
            <p>A 30-minute discovery call — your stack, your constraints, and an honest read on where AI will (and won't) pay off.</p>
          </div>
          <div className="cta-box">
            <a href="/discovery-call" className="btn btn-gold">Book a Discovery Call</a>
            <a className="mail"href="mailto:info@shreepartners.com">info@shreepartners.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;