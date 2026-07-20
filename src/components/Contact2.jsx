import React, { useState } from "react";
import "./Contact2.css";
const Contact2= () => {
  const [messages, setMessages] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const { name, email, company, phone, interest, message } = form;
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const companyValue = company.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const companyRegex = /^[A-Za-z][A-Za-z.\s]*$/;
    const phoneRegex = /^\d{10}$/;
    if (!nameValue || !emailValue || !messageValue)  return setError("Please fill all required fields.");
    if (!nameRegex.test(nameValue)) return setError("Name should contain only letters and spaces.");
    if (!emailRegex.test(emailValue)) return setError("Please enter a valid email address.");
    if (companyValue && !companyRegex.test(companyValue)) return setError("Company name should contain only letters, spaces, and dots.");
    if (phoneValue && !phoneRegex.test(phoneValue)) return setError("Phone number must contain exactly 10 digits.");
    if (messageValue.length < 10) return setError("Message should contain at least 10 characters.");
    const newMessage = {
      name: nameValue,
      email: emailValue,
      company: companyValue,
      phone: phoneValue,
      interest: interest.value,
      message: messageValue,
      submittedAt: new Date().toLocaleString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    console.log("Submitted Data:", newMessage);
    form.reset();
    setSubmitted(true);
  };
  const handleNewMessage = () => {
    setSubmitted(false);
    setError("");
  };
  return (
    <div className="contact-card">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Jane Doe" required onInput={(e) => {e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");}}/>
            </div>
            <div className="form-group">
              <label>Work Email</label>
              <input type="email" name="email" placeholder="jane@company.com" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Please enter a valid email address." onInput={(e) => { e.target.value = e.target.value.replace(/\s/g, "");}}/>
            </div>
            <div className="form-group">
              <label>Company</label>
              <input type="text" name="company" placeholder="Company Name" onInput={(e) => {e.target.value = e.target.value.replace(/[^A-Za-z.\s]/g, ""); }} pattern="^[A-Za-z][A-Za-z.\s]*$" title="Company name can contain only letters, spaces, and dots."/>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="9876543210" maxLength={10} onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, "");}}/>
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
            <label>Message</label>
            <textarea rows="5" name="message" placeholder="Tell us about your goals, timeline, and where AI could help..." required minLength={10}></textarea>
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="submit-btn">Send Message</button>
          <p className="privacy-text">By submitting you agree to our privacy policy.</p>
        </form>
      ) : (
        <div className="success-box">
          <div className="success-icon">✓</div>
          <h3>Thank you — message received.</h3>
          <p> A member of our team will be in touch within one business day. We're looking forward to it.</p>
          <button className="secondary-btn" onClick={handleNewMessage}> Send Another Message</button>
        </div>
      )}
    </div>
  );
};
export default Contact2;