import Navbar from "../components/Navbar";
import "./About.css";


function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">

        <div className="about-container">

          <span className="section-title">
            About Us
          </span>

          <h1>
            Engineering tomorrow's
            <br />
            AI-powered enterprises.
          </h1>

          <p>
            Since 2005, Shree Partners has helped organizations
            modernize technology, accelerate innovation and deliver
            intelligent digital solutions across industries.
          </p>

        </div>

      </section>
<section className="company-story">

  <div className="about-container">

    <div className="story-grid">

      <div className="story-left">

        <span className="section-title">
          Our Story
        </span>

        <h2>
          From digital transformation
          to AI transformation.
        </h2>

        <p>
          Shree Partners has been helping enterprises solve complex
          business challenges for nearly two decades. What started
          with software engineering has evolved into delivering
          AI-powered solutions that improve efficiency, automate
          operations and accelerate business growth.
        </p>

        <p>
          Today we partner with organizations across healthcare,
          financial services and travel to build secure,
          scalable and intelligent digital platforms.
        </p>

      </div>

      <div className="story-right">

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
          alt="Our Team"
        />

      </div>

    </div>

  </div>

</section>
    </>
  );
}

export default About;