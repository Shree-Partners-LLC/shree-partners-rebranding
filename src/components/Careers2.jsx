import "./Careers2.css";
import { useEffect, useRef } from "react";
function Careers2() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) element.classList.add("show");
        else element.classList.remove("show");
      },
      {threshold: 0.15,}
    );
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="perks scroll-animation">
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
  );
}
export default Careers2;