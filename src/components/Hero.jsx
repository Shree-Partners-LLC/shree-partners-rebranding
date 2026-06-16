export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            AI-Native Engineering · Est. 2005
          </span>

          <h1>
            Your legacy systems are an asset.
            <em> If your AI can read them.</em>
          </h1>

          <p className="lede">
            Shree Partners helps enterprises modernize aging codebases,
            accelerate delivery with AI-assisted engineering, and put
            production-grade agents to work on real business systems.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-gold" href="#contact">
              Book a discovery call
            </a>

            <a className="btn btn-ghost" href="#services">
              Explore services
            </a>
          </div>
        </div>

        {/* Terminal Component */}
      </div>
    </section>
  );
}