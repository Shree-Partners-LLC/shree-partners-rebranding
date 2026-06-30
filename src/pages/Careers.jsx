import Navbar from "../components/Navbar";
import "./Careers.css";

function Careers() {
  return (
    <>
      <Navbar />

      <main className="careers">
        <div className="container">
          <h1>Careers at Shree Partners</h1>

          <p className="career-intro">
            Join our passionate team and build innovative solutions in AI,
            software development, cloud computing, and digital transformation.
          </p>

          <div className="job-list">
            <div className="job-card">
              <h2>Frontend Developer</h2>
              <p>Experience: 0-2 Years</p>
              <button>Apply Now</button>
            </div>

            <div className="job-card">
              <h2>Backend Developer</h2>
              <p>Experience: 1-3 Years</p>
              <button>Apply Now</button>
            </div>

            <div className="job-card">
              <h2>AI/ML Engineer</h2>
              <p>Experience: 1-3 Years</p>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Careers;