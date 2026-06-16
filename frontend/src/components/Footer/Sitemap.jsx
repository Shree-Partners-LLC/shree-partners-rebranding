import "./Sitemap.css";
function Sitemap() {
  return (
    <section className="sitemap">
      <div className="sitemap-container">
        <h1 className="sitemap-title">Sitemap</h1>
        <ul className="sitemap-list">
          <li>Services
            <ul>
              <li>
                <a href="/services/application-services">Application Services and Automation</a>
                <ul>
                  <li><a href="/services/test-automation">Test Automation</a></li>
                  <li><a href="/services/full-stack-development">Full Stack Development</a></li>
                  <li><a href="/services/mobility">Mobility</a></li>
                  <li><a href="/services/digital-marketing">Digital Marketing and Collaboration</a></li>
                  <li><a href="/services/intranet">Intranet Solutions</a></li>
                  <li><a href="/services/product-engineering">Product Engineering</a></li>
                </ul>
              </li>
              <li>
                <a href="/services/ai-ml">Digital, AI and Machine Learning</a>
                <ul>
                  <li><a href="/services/nlp">Domain-specific NLP Engines</a></li>
                  <li><a href="/services/rpa">Intelligent RPA</a></li>
                  <li><a href="/services/deep-learning">Development, Machine Learning and Deep Learning</a></li>
                  <li><a href="/services/ivr-ai">Real-time AI on Cloud – IVR</a></li>
                  <li><a href="/services/ai-consulting">Digital and AI Consulting</a></li>
                  <li><a href="/services/iot">Internet of Things (IoT) Solutions</a></li>
                </ul>
              </li>
              <li>
                <a href="/services/data-management">Data Management and Analytics</a>
                <ul>
                  <li><a href="/services/big-data">Big Data Solutions</a></li>
                  <li><a href="/services/data-lakes">Data Lakes Design, Strategy and Implementation</a></li>
                  <li><a href="/services/data-science">Data Science, Predictive and Prescriptive Analytics</a></li>
                  <li><a href="/services/business-intelligence">Business Intelligence and Analytics</a></li>
                </ul>
              </li>
              <li>
                <a href="/services/enterprise-operations">Enterprise Operations Transformation</a>
                <ul>
                  <li><a href="/services/network-operations">Network Operations Center</a></li>
                  <li><a href="/services/data-center">Data Center Operations</a></li>
                  <li><a href="/services/cybersecurity">Cybersecurity and Threat Management</a></li>
                  <li><a href="/services/cloud">Cloud Management</a></li>
                  <li><a href="/services/devops">DevOps Consulting and Implementation</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Industries
            <ul>
              <li>
                <a href="/industries/travel-hospitality">Travel & Hospitality</a>
                <ul>
                  <li><a href="/industries/airline">Airline</a></li>
                  <li><a href="/industries/travel-management">Travel Management Companies</a></li>
                  <li><a href="/industries/hospitality">Hospitality</a></li>
                </ul>
              </li>
              <li>
                <a href="/industries/healthcare">Healthcare</a>
                <ul>
                  <li><a href="/industries/payer">Payer</a></li>
                  <li><a href="/industries/provider">Provider</a></li>
                  <li><a href="/industries/pharma">Pharma & Life Sciences</a></li>
                </ul>
              </li>
              <li><a href="/industries/banking-finance">Banking & Finance</a></li>
              <li><a href="/industries/insurance">Insurance</a></li>
              <li><a href="/industries/professional-services">Professional Services</a></li>
            </ul>
          </li>
          <li>About
            <ul>
              <li><a href="/about/mission-vision">Mission and Vision</a></li>
              <li><a href="/about/alliances">Alliances</a></li>
              <li><a href="/about/leadership">Leadership</a></li>
            </ul>
          </li>
          <li>Insights
            <ul>
              <li><a href="/insights/brochures">Brochures</a></li>
              <li><a href="/insights/blogs">Blogs</a></li>
            </ul>
          </li>
          <li>Careers
            <ul>
              <li>
                <a href="/careers/life-at-shree">Life at Shree Partners</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Sitemap;