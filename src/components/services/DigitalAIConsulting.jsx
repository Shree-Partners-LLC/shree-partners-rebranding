import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/ai.jpg";
import automationDiagram from "../../assets/Test-Automation-diagram.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
function DigitalAIConsulting() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Digital, AI and Machine Learning</h4>

            <h1>Digital and <br/>AI Consulting</h1>
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
          <h2>Unlock Growth Opportunities with Artificial Intelligence</h2>

          <p>
            Data and analytics are genuinely transforming business operating
            models across the globe. A recent study by Gartner reports that AI
            is a key priority for nearly one-third of Chief Information Officers
            in 2020 and beyond. Imagine a business that is positioned for the
            future: a business that anticipates customer needs expertly,
            forecasts more accurately, and soars beyond the competition thanks
            to the power of data, analytics and artificial intelligence.
          </p>

          <p>
            <b>Shree Partners</b> provides clients with data science and artificial
            intelligence consulting services that help them compete, grow and
            thrive in today’s data-driven world. We use data engineering,
            machine learning (ML) and algorithms to help you develop a leading,
            AI-driven organization. Throughout your transformation journey, our
            world-class data scientists and engineers will work alongside you,
            providing industry-leading consulting solutions that help you run a
            more productive, efficient and profitable operation.
          </p>

        </div>
      </section>


      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Grow your business with tailored offerings</h3>
      
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improve profitability with innovative products and solutions</h3>
           
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Increase operational efficiency</h3>
        
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Glean better business insights; improve decision-making</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improve productivity with error-free automation</h3>
          
          </div>

 
        </div>
      </section>
     <Footer/>
    </>
  );
}

export default DigitalAIConsulting;
