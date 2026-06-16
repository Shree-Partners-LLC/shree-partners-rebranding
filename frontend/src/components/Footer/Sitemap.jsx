import "./Sitemap.css";
import { Link } from "react-router-dom";
function Sitemap() {
  return (
    <section className="sitemap">
      <div className="sitemap-container">
        <h1 className="sitemap-title">Sitemap</h1>
        <ul className="sitemap-list">
          <li>Services
            <ul>
              <li>
                <Link to="/services/application-services">Application Services and Automation</Link>
                <ul>
                  <li><Link to="/services/test-automation">Test Automation</Link></li>
                  <li><Link to="/services/full-stack-development">Full Stack Development</Link></li>
                  <li><Link to="/services/mobility">Mobility</Link></li>
                  <li><Link to="/services/digital-marketing">Digital Marketing and Collaboration</Link></li>
                  <li><Link to="/services/intranet">Intranet Solutions</Link></li>
                  <li><Link to="/services/product-engineering">Product Engineering</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/services/ai-ml">Digital, AI and Machine Learning</Link>
                <ul>
                  <li><Link to="/services/nlp">Domain-specific NLP Engines</Link></li>
                  <li><Link to="/services/rpa">Intelligent RPA</Link></li>
                  <li><Link to="/services/deep-learning">Development, Machine Learning and Deep Learning</Link></li>
                  <li><Link to="/services/ivr-ai">Real-time AI on Cloud – IVR</Link></li>
                  <li><Link to="/services/ai-consulting">Digital and AI Consulting</Link></li>
                  <li><Link to="/services/iot">Internet of Things (IoT) Solutions</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/services/data-management">Data Management and Analytics</Link>
                <ul>
                  <li><Link to="/services/big-data">Big Data Solutions</Link></li>
                  <li><Link to="/services/data-lakes">Data Lakes Design, Strategy and Implementation</Link></li>
                  <li><Link to="/services/data-science">Data Science, Predictive and Prescriptive Analytics</Link></li>
                  <li><Link to="/services/business-intelligence">Business Intelligence and Analytics</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/services/enterprise-operations">Enterprise Operations Transformation</Link>
                <ul>
                  <li><Link to="/services/network-operations">Network Operations Center</Link></li>
                  <li><Link to="/services/data-center">Data Center Operations</Link></li>
                  <li><Link to="/services/cybersecurity">Cybersecurity and Threat Management</Link></li>
                  <li><Link to="/services/cloud">Cloud Management</Link></li>
                  <li><Link to="/services/devops">DevOps Consulting and Implementation</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Industries
            <ul>
              <li>
                <Link to="/industries/travel-hospitality">Travel & Hospitality</Link>
                <ul>
                  <li><Link to="/industries/airline">Airline</Link></li>
                  <li><Link to="/industries/travel-management">Travel Management Companies</Link></li>
                  <li><Link to="/industries/hospitality">Hospitality</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/industries/healthcare">Healthcare</Link>
                <ul>
                  <li><Link to="/industries/payer">Payer</Link></li>
                  <li><Link to="/industries/provider">Provider</Link></li>
                  <li><Link to="/industries/pharma">Pharma & Life Sciences</Link></li>
                </ul>
              </li>
              <li><Link to="/industries/banking-finance">Banking & Finance</Link></li>
              <li><Link to="/industries/insurance">Insurance</Link></li>
              <li><Link to="/industries/professional-services">Professional Services</Link></li>
            </ul>
          </li>
          <li>About
            <ul>
              <li><Link to="/about/mission-vision">Mission and Vision</Link></li>
              <li><Link to="/about/alliances">Alliances</Link></li>
              <li><Link to="/about/leadership">Leadership</Link></li>
            </ul>
          </li>
          <li>Insights
            <ul>
              <li><Link to="/insights/brochures">Brochures</Link></li>
              <li><Link to="/insights/blogs">Blogs</Link></li>
            </ul>
          </li>
          <li>Careers
            <ul>
              <li>
                <Link to="/careers/life-at-shree">
                  Life at Shree Partners
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Sitemap;