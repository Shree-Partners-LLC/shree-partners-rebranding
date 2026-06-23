import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <h2 className="footer-logo">SHREE PARTNERS</h2>
          <p className="footer-tag">EMPOWERING YOUR DIGITAL TRANSFORMATION</p>
          <p className="footer-desc">Shree Partners is a digital transformation and technology solutions company that helps customers increase profitability by designing, developing, implementing and maintaining innovative business solutions that drive revenue and reduce cost.</p>
        </div>
        <div className="footer-grid">
          <div className="footer-column">
            <h3>About</h3>
            <a href="/about-us">About Us</a>
            <a href="/mission-vision">Mission and Vision</a>
            <a href="/alliances">Alliances</a>
            <a href="/leadership">Leadership</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <a href="/application-services">Application Services and Automation</a>
            <a href="/ai-ml">Digital, AI and ML Solutions</a>
            <a href="/data-management">Data Management and Analytics</a>
            <a href="/enterprise">Enterprise Operations Transformation</a>
          </div>
          <div className="footer-column">
            <h3>Industries</h3>
            <a href="/industries/travel-hospitality">Travel & Hospitality</a>
            <a href="/industries/healthcare">Healthcare</a>
            <a href="/industries/banking-finance">Banking & Finance</a>
            <a href="/industries/insurance">Insurance</a>
            <a href="/industries/professional-services">Professional Services</a>
          </div>
          <div className="footer-column">
            <h3>Insights</h3>
            <a href="/insights/brochures">Brochures</a>
            <h3 className="social-title">Connect with Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/ShreePartners"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/company/shree-partners/"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://x.com/ShreePartners"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright"><i className="fa-regular fa-copyright"></i>&nbsp; Shree Partners LLC, 2019</p>
          <div className="footer-policy">
            <a href="/privacy_policy">Privacy Policy</a>
            <a href="/cookie_policy">Cookie Policy</a>
            <a href="/sitemap">Sitemap</a>
          </div>
          <p className="countries"><strong>Our Presence:</strong>US | India | UK | Australia | Germany | Singapore</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;