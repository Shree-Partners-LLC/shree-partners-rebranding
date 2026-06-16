import "./Footer.css";
import { Link } from "react-router-dom";
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
            <Link to="/about/mission-vision">Mission and Vision</Link>
            <Link to="/about/alliances">Alliances</Link>
            <Link to="/about/leadership">Leadership</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <Link to="/services/application-services">Application Services and Automation</Link>
            <Link to="/services/ai-ml">Digital, AI and ML Solutions</Link>
            <Link to="/services/data-management">Data Management and Analytics</Link>
            <Link to="/services/enterprise-operations">Enterprise Operations Transformation</Link>
          </div>
          <div className="footer-column">
            <h3>Industries</h3>
            <Link to="/industries/travel-hospitality">Travel & Hospitality</Link>
            <Link to="/industries/healthcare">Healthcare</Link>
            <Link to="/industries/banking-finance">Banking & Finance</Link>
            <Link to="/industries/insurance">Insurance</Link>
            <Link to="/industries/professional-services">Professional Services</Link>
          </div>
          <div className="footer-column">
            <h3>Insights</h3>
            <Link to="/insights/brochures">Brochures</Link>
            <Link to="/insights/blogs">Blogs</Link>
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