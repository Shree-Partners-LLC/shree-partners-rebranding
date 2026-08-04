import React from "react";
import "./Contact.css";
import Contact1 from "../components/Contact1";
import Contact2 from "../components/Contact2";
import Contact3 from "../components/Contact3";
const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <Contact1 />
          <div className="contact-grid">
            <Contact2 />
            <Contact3 />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;