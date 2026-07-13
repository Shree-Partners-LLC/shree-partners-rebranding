import "./About.css";
import aboutHero from "../assets/home-hero-img.jpeg";
import deliveryheadImg from "../assets/deliveryHead.png";
import CeoImg from "../assets/ceo.png";
function About() {
  return (
    <>
      <section className="about-hero">
        <div className="about-container">
          <div className="about-left">
            <span className="section-title">About Shree Partners</span>

            <h1>
              Two decades of delivery.
              <br />
              Now building what's next with AI.
            </h1>

            <p>
              Since 2005 we've helped enterprises modernize, move to the cloud,
              and ship software that matters. Today we're an AI-first partner —
              embedding agentic automation and machine learning into the core of
              how our clients operate.
            </p>
          </div>

          <div className="about-right">
            <img src={aboutHero} alt="About Shree Partners" />
          </div>
        </div>
      </section>
      <section className="about-stats">
        <div className="about-stats-container">
          <div className="about-stat-box">
            <h2>2005</h2>

            <span>Founded</span>
          </div>

          <div className="about-stat-box">
            <h2>200+</h2>

            <span>Specialists</span>
          </div>

          <div className="about-stat-box">
            <h2>2</h2>

            <span>Continents</span>
          </div>

          <div className="about-stat-box last">
            <h2>100s</h2>

            <span>Projects Delivered</span>
          </div>
        </div>
      </section>
      <section className="mission">
        <div className="mission-container">
          <div className="mission-left">
            <span className="section-title">Our Mission</span>

            <h2>
              Make AI a dependable part
              <br />
              of how enterprises run.
            </h2>
          </div>

          <div className="mission-right">
            <p>
              We exist to close the gap between AI's promise and production
              reality. Most organizations have run pilots; few have AI running
              where it counts. We bring the engineering discipline, governance,
              and industry depth to change that — so AI becomes an operating
              advantage, not a science project.
            </p>

            <p>
              From our roots in digital transformation across travel,
              healthcare, and financial services, we've earned the trust of
              leaders who can't afford to get technology wrong. That trust is
              the foundation we now build AI on.
            </p>
          </div>
        </div>
      </section>
      <section className="values">
        <div className="values-container">
          <span className="section-title">What We Value</span>

          <h2>Principles that shape every engagement</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon circle"></div>

              <h3>Outcomes over output</h3>

              <p>
                We measure success in business results, not slideware or shipped
                tickets.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon square"></div>

              <h3>Trust by design</h3>

              <p>
                Security, governance and transparency are built in — never
                bolted on later.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon diamond"></div>

              <h3>Partners, not vendors</h3>

              <p>
                We embed with your teams and leave them stronger than we found
                them.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="leadership">
        <div className="leadership-container">
          <span className="section-title">Leadership</span>

          <h2>The team behind the work</h2>

          <p className="leadership-text">
            Drop in headshots and update names — these are placeholders ready to
            edit.
          </p>

          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-image">
               <img src={CeoImg} alt="Rajiv Dahiya" />
              </div>

              <h3>Rajiv Dahiya</h3>

              <span>Chairman & Chief Executive Officer</span>

              <p>Sets the vision and steers the firm's AI-first strategy.</p>
            </div>
             <div className="leader-card">
              <div className="leader-image">
                 <img src={deliveryheadImg} alt="Tripur Patel" />
              </div>

              <h3>Tripur Patel</h3>

              <span>Delivery Head</span>

              <p>
                Ensures every engagement ships on time, on quality and at scale.
              </p>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <div className="leader-placeholder">Headshot</div>
              </div>

              <h3>Name Surname</h3>

              <span>Managing Partner</span>

              <p>Leads client relationships and global delivery operations.</p>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <div className="leader-placeholder">Headshot</div>
              </div>

              <h3>Name Surname</h3>

              <span>Chief AI Officer</span>

              <p>
                Owns the AI practice, research direction and engineering
                standards.
              </p>
            </div>

           
          </div>
        </div>
      </section>
      <section className="about-office-section">
        <div className="about-office-wrapper">
          <span className="about-office-label">OUR OFFICES</span>

          <h2 className="about-office-title">
            Global delivery, across the US & India
          </h2>

          <div className="about-office-grid">
            <div className="about-office-box">
              <div className="about-office-header">
                <span className="about-office-circle"></span>
                <h3>New Jersey — HQ</h3>
              </div>

              <p>
                197 Route 18 South, Suite 3000 <br />
                East Brunswick, NJ 08816 <br />
                United States
              </p>
            </div>

            <div className="about-office-box">
              <div className="about-office-header">
                <span className="about-office-circle"></span>
                <h3>Georgia</h3>
              </div>

              <p>
                300 Colonial Center Pkwy, Suite 100 <br />
                Roswell, GA 30076 <br />
                United States
              </p>
            </div>

            <div className="about-office-box">
              <div className="about-office-header">
                <span className="about-office-circle"></span>
                <h3>India</h3>
              </div>

              <p>
                Delivery centers in <br />
                Pune & Gurgaon <br />
                India
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-cta">
        <div className="about-cta-container">
          <h2>Want to work with us — or for us?</h2>

          <div className="about-cta-buttons">
            <a href="/Contact" className="about-primary-btn">
                Request a Demo
              </a>
              <a href="/Careers" className="about-secondary-btn">
                View Open Roles
              </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
