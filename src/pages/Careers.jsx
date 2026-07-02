import React, { useState } from "react";
import "./Careers.css";
const roles = [
  {
    title: "Senior Machine Learning Engineer",
    location: "Pune, India",
    type: "Full-time",
    team: "AI & ML",
  },
  {
    title: "AI Solutions Architect",
    location: "East Brunswick, NJ",
    type: "Full-time",
    team: "Solutions",
  },
  {
    title: "Generative AI Engineer",
    location: "Remote — US",
    type: "Full-time",
    team: "GenAI",
  },
  {
    title: "Cloud Infrastructure Engineer",
    location: "Gurgaon, India",
    type: "Full-time",
    team: "Cloud",
  },
  {
    title: "Data Engineer",
    location: "Pune, India",
    type: "Full-time",
    team: "Data",
  },
  {
    title: "Engagement Manager",
    location: "Roswell, GA",
    type: "Full-time",
    team: "Delivery",
  },
];
const Careers = () => {
  const [applications, setApplications] = useState([]);
  const [selectedRole, setSelectedRole] = useState("General application");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const handleApply = (role) => {
    setSelectedRole(role);
    setSubmitted(false);
    setError("");
    document.getElementById("apply")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, email, phone, location, portfolio, resume, note ,} = form;
    if (!name.value.trim() || !email.value.trim() || !resume.files.length) {
      return setError("Please add your name, email, and résumé.");
    }
    const application = {
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      location: location.value.trim(),
      position: selectedRole,
      portfolio: portfolio.value.trim(),
      resume: resume.files[0],
      resumeName: resume.files[0].name,
      note: note.value.trim(),
      submittedAt: new Date().toLocaleString(),
    };
    setApplications((prev) => [...prev, application]);
    setSubmitted(true);
    setError("");
    form.reset();
  };
  const handleNewApplication = () => {
    setSubmitted(false);
    setError("");
  };
  return (
    <div className="careers-page">
      <section className="hero">
        <div className="container">
          <span className="section-tag">Careers</span>
          <h1>Build the AI-first future with people who ship it.</h1>
          <p>Join a team that puts real AI into production for enterprises across travel, healthcare, and finance. Work with senior engineers on problems that matter from the US or India. </p>
        </div>
      </section>
      <section className="perks">
        <div className="container perks-grid">
          <div className="perk-card">
            <h3>Real AI, in production</h3>
            <p>No endless pilots — your work ships and runs for real clients.</p>
          </div>
          <div className="perk-card">
            <h3>Learn from the best</h3>
            <p>Senior engineers, strong mentorship, and a culture of craft.</p>
          </div>
          <div className="perk-card">
            <h3>Flexible & Global</h3>
            <p>Hybrid and remote opportunities across our US and India hubs.</p>
          </div>
          <div className="perk-card">
            <h3>Growth that's earned</h3>
            <p>Clear career paths, real ownership, and room to lead.</p>
          </div>
        </div>
      </section>
      <section className="roles-section">
        <div className="container">
          <span className="section-tag blue">Open Roles</span>
          <h2>Find your next role</h2>
          <div className="roles-list">
            {roles.map(({ id, title, location, type, team }, index) => (
              <div key={id ?? index} className="role-card">
                <div className="role-info">
                  <h3>{title}</h3>
                  <div className="role-meta">
                    {[location, type, team].map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <button className="apply-btn" onClick={() => handleApply(title)}>Apply</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="apply" className="application-section">
        <div className="container application-container">
          <span className="section-tag blue">Apply Now</span>
          <h2>Submit your application</h2>
          <p className="application-text"> Don't see a perfect fit? Choose "General application" and tell us what you do best.</p>
          <div className="application-card">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" required placeholder="Jane Doe"/>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" required placeholder="jane@email.com"/>
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" name="location" placeholder="City, Country"/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Position</label>
                  <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} >
                    <option>General application</option>
                    {roles.map(({ id, title }, index) => (<option key={id ?? index} value={title}>{title}</option>))}
                  </select>
                </div>
                <div className="form-group">
                  <label>LinkedIn / Portfolio URL</label>
                  <input type="url" name="portfolio" placeholder="https://linkedin.com/in/you"/>
                </div>
                <div className="form-group">
                  <label>Résumé / CV </label>
                  <input type="file" name="resume" required accept=".pdf,.doc,.docx" />
                </div>
                <div className="form-group">
                  <label>Why Shree Partners?</label>
                  <textarea rows="5" name="note" placeholder="Tell us what you'd bring and what you're looking for..."></textarea>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" id="consent" required/>
                  <label htmlFor="consent"> I consent to Shree Partners storing my information for recruitment purposes.</label>
                </div>
                {error && ( <p className="error-text">{error}</p>)}
                <button type="submit" className="submit-btn"> Submit Application</button>
              </form>
            ) : (
              <div className="success-box">
                <div className="success-icon">✓</div>
                <h3>Application received — thank you!</h3>
                <p>We've got your application for the{" "} <strong>{selectedRole}</strong> role. Our recruitment team reviews every application and will contact you if your profile matches our requirements.</p>
                <button className="secondary-btn" onClick={handleNewApplication}>Submit Another Application
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Careers;