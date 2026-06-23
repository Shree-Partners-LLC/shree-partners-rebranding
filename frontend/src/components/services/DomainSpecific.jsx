import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/ai.jpg";
import NLPDiagram from "../../assets/Domain-Specific-NLP-Engines.png";

function DomainSpecific() {
  return (
    <>
      
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Digital, AI and Machine Learning</h4>

            <h1>Domain-specific NLP Engines</h1>
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
          <h2>The Power of Language</h2>

          <p>
            Two artificial intelligence (AI) components – deep learning and
            natural language processing (NLP) – offer incredible business
            opportunities by enabling machines to understand and leverage
            natural language in applications. NLP-based test automation
            documentation extracts information from human-readable formats to
            quickly process and generate test cases. The three-fold combination
            of AI, deep learning, and NLP delivers fully automated, autonomous
            testing platforms that help today’s organizations address key
            objectives faster and more cost effectively.
          </p>

          <p>
            According to Gartner, by 2020 NLP will account for more than half of
            all analytical queries. Shree Partners offers expertise in deep
            learning, sentiment-aware bots and technologies that capture the
            real-time intent behind individuals’ language. Aided by this
            expertise, our company builds powerful, advanced solutions with
            domain-specific NLP engines that help clients address customer
            issues with the right blend of contextual awareness and
            understanding.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2> NLP Overview</h2>

          <div className="overview-grid">
            <div>
              <p>
                Today’s digital ecosystem requires the integration of solutions
                with existing applications and core systems for greater
                efficiency. At Shree Partners, our lexicon construction process
                taps deep learning, which enables solutions to deliver greater
                contextual awareness. As a result, our solutions are more
                targeted and empower faster deployment of purpose-built
                solutions.
              </p>

              <p>
                Our domain-specific NLP engine solutions can be seamlessly
                integrated with other channels, such as the Internet of Things
                (IoT), interactive voice response (IVR), social and mobile.
              </p>
            </div>

            <ul className="overview-list">
              <li>Anchor natural language processing, helping applications become domain-aware</li>
              <li>Easily integrate with existing platforms, eliminating the need for tedious customization</li>
              <li>“Decode” sentiments behind customer inquiries, ensuring that responses are effectively targeted</li>
              <li>Go beyond regular parsing, syntax, semantics, segmentation, and stemming to include advanced domain-specific NLP options</li>
              
            </ul>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Summarizes and synthesizes large blocks of information</h3>
         
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Analyzes and correlates data and content</h3>
           
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Intuits emotion and meaning through chatbots</h3>
            
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Filters spam content; warns employees from clicking suspicious email</h3>
            
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Transcribes interactions</h3>
            
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Conducts and assists with voice search</h3>
           
          </div>
           <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Automates alerts, reminders and calls to action using collaboration tools</h3>
           
          </div>
        </div>
      </section>

      <section className="diagram-section">
        <div className="container">
          <h2>Natural Language Understanding Service Overview</h2>

          <img
            src={NLPDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
    
    </>
  );
}

export default DomainSpecific;
