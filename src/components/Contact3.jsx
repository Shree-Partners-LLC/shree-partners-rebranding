import React from "react";
import "./Contact3.css";
const Contact3 = () => {
  return (
    <div className="contact-info">
      <div className="info-card dark">
        <span className="info-tag">Reach Us Directly</span>
        <div className="info-item">
          <span>Email</span>
          <a href="mailto:info@shreepartners.com">info@shreepartners.com</a>
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
        <span className="section-tag blue"> Offices </span>
        <div className="office">
          <h4>New Jersey — HQ</h4>
          <p> 197 Route 18 South, Suite 3000, East Brunswick, NJ 08816</p>
        </div>
        <div className="office">
          <h4>Georgia</h4>
          <p> 300 Colonial Center Pkwy, Suite 100, Roswell, GA 30076</p>
        </div>
        <div className="office">
          <h4>India</h4>
          <p>Delivery centers in Pune & Gurgaon, India</p>
        </div>
      </div>
    </div>
  );
};
export default Contact3;