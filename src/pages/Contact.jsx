import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setSubmitted(true);
    setError("");
    form.reset();
  };
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-tag blue"> Contact Us</span>
          <h1> Let's talk about your AI roadmap.</h1>
          <p> Tell us where you want AI to make a difference. We'll get back within one business day.</p>
          <div className="contact-grid">
            <div className="contact-card">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name </label>
                      <input type="text" name="name" placeholder="Jane Doe" />
                    </div>
                    <div className="form-group">
                      <label>Work Email</label>
                      <input type="email" name="email" placeholder="jane@company.com" />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input type="text" name="company" placeholder="Company name" />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" name="phone" placeholder="+1 (555) 000-0000"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>How can we help?</label>
                    <select name="interest">
                      <option>General inquiry</option>
                      <option>AI & Machine Learning</option>
                      <option>Generative AI & AI Agents</option>
                      <option>Cloud & Infrastructure</option>
                      <option>Industry AI Solutions</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message </label>
                    <textarea rows="5" name="message" placeholder="Tell us about your goals, timeline, and where AI could help..." ></textarea>
                  </div>
                  {error && (<p className="error-text"> {error}</p>)}
                  <button type="submit"className="submit-btn"> Send Message</button>
                  <p className="privacy-text"> By submitting you agree to our privacy policy.</p>
                </form>
              ) : (
                <div className="success-box">
                  <div className="success-icon"> ✓ </div>
                  <h3>Thank you — message received.</h3>
                  <p>A member of our team will be in touch within one business day. We're looking forward to it.</p>
                  <button
                    className="secondary-btn"
                    onClick={() => {
                      setSubmitted(false);setError("");
                  }}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
            <div className="contact-info">
              <div className="info-card dark">
                <span className="info-tag">Reach Us Directly</span>
                <div className="info-item">
                  <span>Email</span>
                  <a href="mailto:info@shreepartners.com"> info@shreepartners.com</a>
                </div>
                <div className="info-item">
                  <span>Phone</span>
                  <p>+1 (555) 000-0000</p>
                </div>
                <div className="info-item">
                  <span>Sales & Partnerships</span>
                  <a href="mailto:hello@shreepartners.com"> hello@shreepartners.com</a>
                </div>
              </div>
              <div className="info-card office-card">
                <span className="section-tag blue"> Offices</span>
                <div className="office">
                  <h4> New Jersey — HQ</h4>
                  <p> 197 Route 18 South, Suite 3000, East Brunswick, NJ 08816 </p>
                </div>
                <div className="office">
                  <h4> Georgia </h4>
                  <p> 300 Colonial Center Pkwy, Suite 100, Roswell, GA 30076</p>
                </div>
                <div className="office">
                  <h4>India</h4>
                  <p> Delivery centers in Pune & Gurgaon, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;