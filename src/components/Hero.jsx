import "./Hero.css";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">

            <div className="hero-dot"></div>

            <span>
              AI-First Company · Agentic Automation
            </span>

          </div>

          <h1>
            Your enterprise,
            <br />
            re-engineered around AI.
          </h1>

          <p>
            Shree Partners builds agentic AI,
            machine learning,
            and generative systems into the core
            of how you operate — turning AI-powered
            transformation into measurable,
            durable advantage.
          </p>

          <div className="hero-buttons">

            <button>
              Request a demo
            </button>

            <button className="outline">
              See our work
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img src={hero} alt="" />

        </div>

      </div>

    </section>
  );
}

export default Hero;