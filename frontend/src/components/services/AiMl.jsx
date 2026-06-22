import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./ApplicationServices.css";
import serviceImg from "../assets/ai.jpg";
import detailsImg from "../assets/conversational-ai.jpg";

import {
  FaRobot,
  FaProjectDiagram,
  FaBrain,
  FaCloud,
  FaLightbulb,
  FaMicrochip,
} from "react-icons/fa";
export default function TestAutomation() {
  return (
    <>
      <Navbar />
      <section className="app-services">
        <div className="left-panel">
          <div className="content">
            <h1>
              <span>Digital, AI and</span>
              <br />
              <span>ML Solutions</span>
            </h1>

            <p>Empower your business with data-driven digital solutions</p>
          </div>
        </div>
        <div
          className="right-panel"
          style={{
            backgroundImage: `
      linear-gradient(
        rgba(11,20,53,0.55),
        rgba(11,20,53,0.55)
      ),
      url(${serviceImg})
    `,
          }}
        ></div>
      </section>
      <section className="app-details">
        <div className="app-details-content">
          <div className="app-text">
            <h2>Transforming Business Through Intelligent Automation</h2>

            <p>
              Artificial intelligence (AI) and machine learning are at the core
              of digital transformation. By leveraging these technologies,
              today’s companies can improve business processes, simplify
              decision-making, generate actionable insights and create new
              business models. Other future-forward technologies like natural
              language processing (NLP), Internet of Things (IoT) and robotics
              process automation (RPA) help leaders improve operations, enhance
              customer value and increase overall competitiveness.
            </p>

            <p>
              Shree Partners’ digital-led transformative processes help
              companies run more efficient, agile and profitable operations. We
              work closely with your internal constituents to identify shared
              goals, priorities and action steps that offer the best way
              forward. Together as partners, we’ll design, deploy and integrate
              customized solutions that accelerate your growth and innovation.
            </p>

            <button className="contact-btn">Contact Us</button>
          </div>

          <div className="app-image">
            <img src={detailsImg} alt="Application Services" />
          </div>
        </div>
      </section>
      <section className="service-offerings">
        <h2>Service Offerings</h2>

        <div className="offerings-grid">
          <a href="/Domain-specific" className="offering-card">
            <FaRobot  className="offering-icon" />
            <h3>Domain-specific NLP Engines</h3>
          </a>

          <a href="/Intelligent_RPA" className="offering-card">
            <FaProjectDiagram className="offering-icon" />
            <h3>Intelligent RPA</h3>
          </a>

          <a href="/Development" className="offering-card">
            <FaBrain className="offering-icon" />
            <h3>Development, Machine Learning and Deep Learning</h3>
          </a>

          <a href="/IVR<" className="offering-card">
            <FaCloud className="offering-icon" />
            <h3>Real-time AI on Cloud – IVR</h3>
          </a>

          <a href="/ AI-Consulting" className="offering-card">
            <FaLightbulb className="offering-icon" />
            <h3>Digital and AI Consulting</h3>
          </a>

          <a href="/IoT" className="offering-card">
            <FaMicrochip className="offering-icon" />
            <h3>Internet of Things (IoT) Solutions</h3>
          </a>
        </div>
      </section>
      

      <Footer />
    </>
  );
}
