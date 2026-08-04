import React, { useEffect, useRef } from "react";
import "./Contact1.css";
const Contact1 = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      },
      {
        threshold: 0.15,
      }
    );
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={sectionRef} className="scroll-animation">
      <span className="section-tag blue">Contact Us</span>
      <h1>Let's talk about your AI roadmap.</h1>
      <p>
        Tell us where you want AI to make a difference. We'll get back within
        one business day.
      </p><br/><br/>
    </div>
  );
};
export default Contact1;