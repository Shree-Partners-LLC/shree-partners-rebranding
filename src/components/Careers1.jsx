import "./Careers1.css";
import { useEffect, useRef } from "react";
function Careers1() {
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
    <section ref={sectionRef} className="hero scroll-animation">
      <div className="container">
        <span className="section-tag">Careers</span>
        <h1>Build the AI-first future with people who ship it.</h1>
        <p>Join a team that puts real AI into production for enterprises across travel, healthcare, and finance. Work with senior engineers on problems that matter from the US or India.</p>
      </div>
    </section>
  );
}
export default Careers1;