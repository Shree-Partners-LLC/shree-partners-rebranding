import Navbar from "../components/Navbar";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <main className="about">
        <div className="container">
          <h1>About Us</h1>

          <p>
            Shree Partners is an AI-first technology company helping
            businesses modernize their digital infrastructure through
            innovative software solutions, automation, and AI-powered
            services.
          </p>

          <div className="about-cards">
            <div className="card">
              <h2>Our Vision</h2>
              <p>
                To become a trusted global technology partner by delivering
                innovative and scalable digital solutions.
              </p>
            </div>

            <div className="card">
              <h2>Our Mission</h2>
              <p>
                Empower organizations with modern technology, AI, cloud, and
                automation to accelerate business growth.
              </p>
            </div>

            <div className="card">
              <h2>Why Choose Us?</h2>
              <p>
                Experienced team, customer-focused approach, modern
                technologies, and reliable delivery.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;