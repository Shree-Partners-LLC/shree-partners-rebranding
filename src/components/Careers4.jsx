import "./Careers4.css";
const Careers4 = ({roles,selectedRole,setSelectedRole,submitted,handleSubmit,handleNewApplication,error}) => {
  return (
    <section id="apply" className="application-section">
      <div className="container application-container">
        <span className="section-tag blue">Apply Now</span>
        <h2>Submit your application</h2>
        <p className="application-text"> Don't see a perfect fit? Choose "General application" and tell us what you do best. </p>
        <div className="application-card">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" required placeholder="Jane Doe" onInput={(e) => {e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");}}/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" requiredplaceholder="jane@email.com" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"/>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" placeholder="+1 (555) 000-0000"  maxLength={10} onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, "");}}/>
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" name="location" placeholder="City, Country" onInput={(e) => {e.target.value = e.target.value.replace(/[^a-zA-Z\s,]/g, "");}} />
                </div>
              </div>
              <div className="form-group">
                <label>Position</label>
                <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                  <option>General application</option>
                  {roles.map(({ title }, index) => (
                    <option key={index} value={title}> {title}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>LinkedIn / Portfolio URL</label>
                <input type="url" name="portfolio" placeholder="https://linkedin.com/in/you"   pattern="https:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9-_%]+\/?"/>
              </div>
              <div className="form-group">
                <label>Résumé / CV</label>
                <input type="file" name="resume" required accept=".pdf,.doc,.docx"/>
              </div>
              <div className="form-group">
                <label>Why Shree Partners?</label>
                <textarea rows="5" name="note" placeholder="Tell us what you'd bring and what you're looking for..."></textarea>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="consent" required />
                <label htmlFor="consent"> I consent to Shree Partners storing my information for recruitment purposes.</label>
              </div>
              {error && <p className="error-text">{error}</p>}
              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
          ) : (
            <div className="success-box">
              <div className="success-icon">✓</div>
              <h3>Application received — thank you!</h3>
              <p>We've got your application for the{" "}<strong>{selectedRole}</strong> role.</p>
              <button className="secondary-btn" onClick={handleNewApplication}>Submit Another Application </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Careers4;
