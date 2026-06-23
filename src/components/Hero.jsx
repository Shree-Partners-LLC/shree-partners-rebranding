import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">

        {/* Left Content */}

        <div>

          <span className="eyebrow">
            AI-Native Engineering · Est. 2005
          </span>

          <h1>
            Your legacy systems are an asset.
            <br />
            <em>If your AI can read them.</em>
          </h1>

          <p className="lede">
            Shree Partners helps enterprises modernize aging codebases,
            accelerate delivery with AI-assisted engineering, and put
            production-grade agents to work on real business systems.
          </p>

          <div className="hero-ctas">

            <a href="#contact" className="btn btn-gold">
              Book a Discovery Call
            </a>

            <a href="#services" className="btn btn-ghost">
              Explore Services
            </a>

          </div>

          <div className="hero-meta">

            <div>
              <strong>20+ yrs</strong>
              Enterprise delivery
            </div>

            <div>
              <strong>US + India</strong>
              Onshore / offshore model
            </div>

            <div>
              <strong>ISO 27001</strong>
              Certified delivery center
            </div>

          </div>

        </div>

        {/* Right Terminal */}

        <div
          className="term"
          role="img"
          aria-label="Terminal showing AI modernization"
        >

          <div className="term-bar">

            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>

            <span className="term-title">
              shree-agent — modernize
            </span>

          </div>

          <div className="term-body">

            <div className="t-line t-cmd">
              shree audit ./claims-core --legacy
            </div>

            <div className="t-line t-dim">
              scanning 412k LOC · Java 6 / stored procs / batch jobs
            </div>

            <div className="t-line">
              found <span className="t-gold">37 modernization candidates</span>,
              ranked by risk
            </div>

            <div className="t-line t-cmd">
              shree modernize PolicyBatchJob --target spring-boot
            </div>

            <div className="t-line t-old">
              CURSOR c_pol IS SELECT * FROM POL_MSTR;
            </div>

            <div className="t-line t-new">
              + repository.streamActivePolicies(asOf)
            </div>

            <div className="t-line t-new">
              + 214 unit tests generated · all passing
            </div>

            <div className="t-line t-dim">
              review queued → senior engineer sign-off
            </div>

            <div className="t-line t-cmd">
              _<span className="caret"></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;