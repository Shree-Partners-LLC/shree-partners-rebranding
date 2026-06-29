import "../styles/Contact.css";
import contactImage from "../assets/contact.jpeg";
function Contact() {
  return (
    <section className="contact">
      <div className="contact-hero">
        <div className="contact-title"><h1>Contact</h1></div>
        <div className="contact-image"><img src={contactImage} alt="Contact Us" /></div>
      </div>
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-box">
            <a href="mailto:connect@shreepartners.com" className="contact-link"><i className="fa-regular fa-envelope"></i>connect@shreepartners.com</a>
            <a href="https://www.facebook.com/ShreePartners" className="contact-link"><i className="fa-brands fa-facebook-f"></i>Facebook</a>
            <a href="https://www.linkedin.com/company/shree-partners/" className="contact-link"><i className="fa-brands fa-linkedin-in"></i>LinkedIn</a>
            <a href="https://x.com/ShreePartners" className="contact-link"><i className="fa-brands fa-x-twitter"></i>Twitter</a>
          </div>
          <div className="contact-box">
            <h3><i className="fa-solid fa-location-dot"></i>Global Office</h3>
            <div className="office">
              <h4>Headquarters</h4>
              <p>Princeton Forrestal Village <br />116 Village Blvd #200 <br />Princeton NJ 08540</p>
              <h4>Delivery Center</h4>
              <p>46 Raj Nagar <br />Pitampura Delhi, 110034</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;