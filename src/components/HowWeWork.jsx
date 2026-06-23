import "../styles/howwework.css";

function HowWeWork() {
  return (
    <section id="approach">
      <div className="wrap">

        <div className="sec-head">
          <span className="eyebrow">How we work</span>

          <h2>
            Prove it small, then scale it.
          </h2>

          <p>
            AI engagements fail when they start with a platform purchase.
            Ours start with a result.
          </p>
        </div>

        <div className="how-grid">

          <div className="how">

            <span className="k">
              Weeks 1–2
            </span>

            <h3>Assess</h3>

            <p>
              We audit one real system or workflow and identify where AI
              moves the needle — with the evidence to back it.
            </p>

          </div>

          <div className="how gold">

            <span className="k">
              Weeks 3–8
            </span>

            <h3>Pilot</h3>

            <p>
              A working result on your codebase or process: a modernized
              module, a live agent, a measured velocity gain.
              Not a demo.
            </p>

          </div>

          <div className="how">

            <span className="k">
              Ongoing
            </span>

            <h3>Scale</h3>

            <p>
              We extend what worked across teams and systems, with our
              US–India delivery model keeping cost and quality in balance.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowWeWork;