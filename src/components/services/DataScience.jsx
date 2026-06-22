import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/images.jpeg";
import datavalueDiagram from "../../assets/Data-Valuediagram.png";
import Navbar from "../Navbar";
import Footer from "../Footer";

function DataScience() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Data Management and Analytics</h4>

            <h1>Data Science,<br/>Predictive <br/> and Prescriptive Analytics</h1>
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
          <h2>Building Your Business with Data</h2>

          <p>
            At Shree Partners, our ability to analyze complex data from
            disparate sources (both structured and unstructured) helps our
            clients leverage the untapped potential of data to address critical
            business challenges.
          </p>

          <p>
            The analytic and predictive models we create for our clients are
            validated by Shree experts who uncover hidden patterns that unlock
            the data’s greatest value. Shree data analysts and scientists are
            trained in classic analytic methodologies: statistical analysis,
            econometrics, time series modeling, clustering, principal component
            analysis, driver analysis – and more. Our expertise in the latest
            technologies – Dataiku, SageMaker, Azure ML Studio, R, Python and
            H2O – helps us compile data-driven recommendations to guide
            investment decisions, strategic planning, policy management, and
            supplier and operation optimization – to name a few.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2>Data Science Overview</h2>

          
            <div>
              <p>
                At <b>ShreePartners</b>, we develop solutions that leverage the
                combination of analysis, data mining, machine learning, coding,
                algorithms and statistics to reach desired outcomes. Creating
                predictive models can help clients monitor real-time
                transactional data; comprehensive data analysis can also help
                clients initiate preemptive measures to uncover fraudulent
                activities, for example.
              </p>

              <p>
                Other solutions include the use of natural language processing
                (NLP) to better understand customer and employee opinions and
                behaviors by analyzing comments posted on social media. Data
                science harnesses the power of analytics to help decision-makers
                gain a complete, transparent view of an organization.
              </p>
              <p>
                While ShreePartners certainly is equipped to conduct ad hoc
                (i.e. single use) business intelligence (BI) analyses for our
                clients, we believe the greatest value comes from integrating
                our findings and models into comprehensive applications.
              </p>
            </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Make better business decisions with quantifiable, data-based evidence</h3>
 
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improve operational efficiency across the organization with data-driven decisions</h3>
          
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Boost conversion rates and speed up sales cycles by assessing prospects’ preferences</h3>
          
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Personalize campaigns and solutions to meet specific target audience needs</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Increase customer satisfaction</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Save time and money by predicting fraud and anomalies before they occur</h3>
          
          </div>
        </div>
      </section>

      <section className="diagram-section">
        <div className="container">
          <h2>Data Value Pyramid</h2>

          <img
            src={datavalueDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
     
    </>
  );
}

export default DataScience;
