import "./ProfessionalServices.css";
import heroImg from "../../assets/professional-services-banner.webp";
import serviceImg from "../../assets/professional-services-main.jpeg";
import valueImg from "../../assets/professional-services-value.jpeg";
function ProfessionalServices() {
  return (
    <div className="professional-services">
      <section className="ps-hero">
        <img src={heroImg} alt="Professional Services" />
        <div className="ps-overlay">
          <h1>Professional Services</h1>
          <p>Win with the customer at the heart<br />of your business</p>
        </div>
      </section>
      <section className="ps-intro">
        <div className="ps-intro-content">
          <div className="ps-text">
            <p>Professional service companies are experiencing a huge transformation as evolving market needs, customer demands, technology and disruption are changing the entire industry.</p>
            <p>Successful professional service firms understand that putting the customer first requires the best systems and processes to expertly manage people, workflows, security, data and integration. With strong systems in place, organizations improve customer-centricity, elevate their market position, improve operational efficiency and better manage costs.</p>
            <button>Contact Us</button>
          </div>
          <div className="ps-image">
            <img src={serviceImg} alt="Professional Services" />
          </div>
        </div>
      </section>
      <section className="ps-services">
        <h2>Key Service Offerings</h2>
        <div className="ps-grid">
          <div className="ps-card">
            <h3>Assessment and Consulting</h3>
            <p>We help define and orchestrate a strategy that supports your organization both today and into the future. Our consultants assess your current challenges and recommend the best mix of technologies, platforms and methodologies.</p>
          </div>
          <div className="ps-card">
            <h3>Risk and Compliance Management</h3>
            <p>Understanding compliance and risk management is fundamental. Our solutions include cognitive technologies, artificial intelligence and data analytics to address key issues and ensure compliance.</p>
          </div>
          <div className="ps-card">
            <h3>QA Automation</h3>
            <p>Intelligent automation such as RPA, NLP and AI-powered chatbots help improve productivity, establish error-free processes and strengthen customer relationships.</p>
          </div>
          <div className="ps-card">
            <h3>Application Development and Support</h3>
            <p> We leverage industry-leading tools and frameworks to deliver a faster, more agile application development lifecycle that improves productivity and accelerates time to market.</p>
          </div>
          <div className="ps-card">
            <h3>Infrastructure Services and Support</h3>
            <p>Transform your business through converged infrastructure and virtualized networks. Our managed services help redesign IT strategy and improve service delivery.</p>
          </div>
          <div className="ps-card">
            <h3>SAP BusinessObjects Conversion</h3>
            <p>Integrate business intelligence and analytics with SAP BusinessObjects. Our flexible architecture supports growth from a single tool to multiple tools and interfaces.</p>
          </div>
        </div>
      </section>
      <section className="ps-value">
        <h2>Business Value</h2>
        <p className="ps-subtitle">Benefits to professional service organizations include:</p>
        <div className="ps-value-content">
          <div className="ps-value-box">
            <i className="fa-regular fa-lightbulb ps-icon"></i>
            <ul>
              <li><strong>Enhance</strong> service delivery and customer experience through regulatory compliance and application development services</li>
              <li><strong>Increase</strong> operational efficiency with automated business intelligence (BI) solutions</li>
              <li><strong>Reduce</strong> total cost of ownership (TCO) with accelerators, frameworks and cloud-based infrastructures</li>
            </ul>
          </div>
          <div className="ps-value-image"><img src={valueImg} alt="Business Value" /></div>
        </div>
      </section>
    </div>
  );
}
export default ProfessionalServices;