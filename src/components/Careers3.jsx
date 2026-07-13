const Careers3 = ({
  roles,
  setSelectedRole,
  setSubmitted,
  setError,
}) => {
  const handleApply = (role) => {
    setSelectedRole(role);
    setSubmitted(false);
    setError("");
    document.getElementById("apply")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="roles-section">
      <div className="container">
        <span className="section-tag blue">Open Roles</span>
        <h2>Find your next role</h2>
        <div className="roles-list">
          {roles.map(({ title, location, type, team }, index) => (
            <div key={index} className="role-card">
              <div className="role-info">
                <h3>{title}</h3>
                <div className="role-meta">
                  {[location, type, team].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <button
                className="apply-btn"
                onClick={() => handleApply(title)}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Careers3;