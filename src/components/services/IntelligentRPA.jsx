import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/ai.jpg";
import rpaDiagram from "../../assets/Robotic-Process-Automation-Capabilites.png";
import Navbar from "../Navbar";
import roboticDiagram from "../../assets/Robotic-Process-Automation_Ecosystem.png";
import Footer from "../Footer";
function IntelligentRPA() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Digital, AI and Machine Learning</h4>

            <h1>Intelligent RPA</h1>
          </div>
        </div>

        <div
          className="hero-image"
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

      <section className="test-intro">
        <div className="container">
          <h2>Automating the Future</h2>

          <p>
            Today’s digital transformation is completely rewriting tomorrow’s
            business future. The convergence of artificial intelligence (AI) and
            robotic process automation (RPA) is bringing unprecedented changes
            to automated, rules-based, and repetitive tasks. In fact, the RPA
            market is expected to reach $8.75 billion by 2024, highlighting the
            explosive revolution in automation.
          </p>

          <p>
            One of the most innovative technologies in digital transformation is
            RPA, destined to have a profound impact on routine processes.
            Workspace transformation through robotics has already arrived, and
            at <b>Shree Partners</b>, we believe that today’s companies can
            leverage the power of robotic intelligence to solve both routine and
            complex business problems. Our passion for innovative technology,
            coupled with our expertise in leading technology solutions, makes us
            the right partner to help our clients leverage RPA for business
            success.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2>Intelligent RPA Overview</h2>

          
            <div>
              <p>
                Intelligent RPA transforms standard workflows into advanced
                processes by combining rules engines with machine learning and
                deep learning. By leveraging dynamic requirements, intelligent
                RPA can reprogram itself to automate routine processes. And when
                combined with AI, RPA can help organizations enhance their
                overall process automation. Our solutions include both advanced
                RPA and cognitive RPA to process unstructured data in automated
                workflows; machine learning systems can also function
                simultaneously with human-like attributes.
              </p>

              <p>
                In healthcare, for example, data resides in multiple systems
                including clinical applications, administration, insurance,
                radiology, accounting, laboratories, ERP – and others. Because
                this data resides on disparate technology platforms, cost
                increases and process errors are inevitable. Robotic process
                automation – the combination of automation and robotics – helps
                companies improve operational efficiencies and fine-tune
                workflows. Intelligent RPA brings all this information together
                for a smoother running organization.
              </p>
            </div>

           
         
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Reduce process time across the organization</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Seamlessly integrate existing IT infrastructure</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improve overall productivity</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Comply with regulatory requirements</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Enjoy greater efficiency through digitization</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Uninterrupted operations, 24/7</h3>

          </div>
        </div>
      </section>

      <section className="diagram-section">
        <div className="container">
          <h2>Robotic Process Automation Capabilities</h2>

          <img
            src={rpaDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
            <section className="diagram-section">
        <div className="container">
          <h2>Robotic Process Automation – Ecosystem</h2>

          <img
            src={roboticDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default IntelligentRPA;
